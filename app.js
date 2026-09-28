/* ---- Mobile menu toggle ---- */
(function(){
  var btn = document.getElementById('menuBtn');
  var links = document.getElementById('navlinks');
  if(btn){
    btn.addEventListener('click', function(){
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ links.classList.remove('open'); btn.setAttribute('aria-expanded','false'); });
    });
  }
})();

/* ---- Safe scroll reveal: reveals BEFORE elements enter view, never leaves blank gaps ---- */
(function(){
  var els = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){
    els.forEach(function(el){ el.classList.add('in'); }); // fallback: show all
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px 15% 0px', threshold: 0.01 });
  els.forEach(function(el){ io.observe(el); });
  // Safety net: if anything is still hidden shortly after load, reveal it
  window.addEventListener('load', function(){
    setTimeout(function(){ els.forEach(function(el){ if(!el.classList.contains('in')) el.classList.add('in'); }); }, 1200);
  });
})();

/* ---- FormSubmit.co forms (all email melissa@encountive.com).
   Handles every form.form-card on the page. Each form posts to its action
   (https://formsubmit.co/el/zudoro, the activated alias for that inbox) and
   shows its own success message (data-success-msg).
   A cross-origin fetch to FormSubmit's /ajax/ endpoint does not deliver:
   Cloudflare answers it without an Access-Control-Allow-Origin header, so the
   browser throws "Failed to fetch" and the submission never arrives. A normal
   form POST navigates to FormSubmit, which can complete the check and deliver
   the email. ---- */
(function(){
  var CONTACT_EMAIL = 'melissa@encountive.com';
  var ERROR_BEFORE = 'Sorry, something went wrong sending your answers. Email ';
  var ERROR_AFTER = ' directly and we will follow up.';

  /* Single source of truth for Melissa's Google Calendar booking page.
     HTML hrefs and form autoresponse text use the same URL as a no-JS fallback.
     This script rewrites both so a future change only needs this constant. */
  var CONSULT_URL = 'https://calendar.app.google/4rcHz3JYTDYmnS6i9';
  document.querySelectorAll('[data-consult-link]').forEach(function(a){
    a.setAttribute('href', CONSULT_URL);
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
  });
  document.querySelectorAll('input[name="_autoresponse"]').forEach(function(input){
    input.value = input.value.replace(/https:\/\/calendar\.app\.google\/[A-Za-z0-9_-]+/g, CONSULT_URL);
  });

  var sentId = '';
  try { sentId = new URLSearchParams(window.location.search).get('sent') || ''; } catch (e) { sentId = ''; }

  document.querySelectorAll('form.form-card').forEach(function(form){
    var ok = form.querySelector('.form-success');
    var successMsg = form.getAttribute('data-success-msg') || 'Thank you. Your message is on its way.';

    if(sentId && form.id === sentId && ok){
      ok.textContent = successMsg;
      ok.classList.remove('error');
      ok.classList.add('show');
    }

    function show(msg, isError){
      if(!ok) return;
      ok.textContent = '';
      if(isError){
        ok.appendChild(document.createTextNode(ERROR_BEFORE));
        var mail = document.createElement('a');
        mail.href = 'mailto:' + CONTACT_EMAIL;
        mail.textContent = CONTACT_EMAIL;
        ok.appendChild(mail);
        ok.appendChild(document.createTextNode(ERROR_AFTER));
      } else {
        ok.textContent = msg;
      }
      ok.classList.toggle('error', !!isError);
      ok.classList.add('show');
      ok.scrollIntoView({behavior:'smooth', block:'center'});
    }

    form.addEventListener('submit', function(ev){
      // Required-field check
      var required = form.querySelectorAll('[required]');
      var valid = true;
      required.forEach(function(f){
        if((f.type === 'checkbox' && !f.checked) || (f.type !== 'checkbox' && !f.value.trim())){
          valid = false; f.style.borderColor = '#ef4444';
        } else { f.style.borderColor = ''; }
      });
      // "Check at least one" groups (fieldsets marked data-require-one)
      form.querySelectorAll('fieldset[data-require-one]').forEach(function(fs){
        var any = fs.querySelector('input[type=checkbox]:checked');
        fs.classList.toggle('invalid', !any);
        if(!any){ valid = false; }
      });
      if(!valid){ ev.preventDefault(); return; }

      // Let the browser POST the form. Point FormSubmit back here afterward.
      var next = form.querySelector('input[name="_next"]');
      if(!next){
        next = document.createElement('input');
        next.type = 'hidden';
        next.name = '_next';
        form.appendChild(next);
      }
      var back = new URL(window.location.href);
      back.searchParams.set('sent', form.id || 'form');
      var section = form.closest('section');
      if(section && section.id) back.hash = section.id;
      next.value = back.toString();

      var btn = form.querySelector('button[type=submit]');
      var original = btn ? btn.textContent : '';
      if(btn){ btn.disabled = true; btn.textContent = 'Sending…'; }

      // If the navigation never leaves the page, show the mailto fallback.
      window.setTimeout(function(){
        if(btn){ btn.disabled = false; btn.textContent = original; }
        show('', true);
      }, 12000);
    });
  });
})();
