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

/* ---- FormSubmit.co forms: submit via AJAX (all email melissa@encountive.com).
   Handles every form.form-card on the page. Each form derives its own endpoint
   from its action attribute and shows its own success message (data-success-msg). ---- */
(function(){
  var ERROR_MSG = 'Sorry, something went wrong sending your answers. Please email melissa@encountive.com directly and we will follow up.';

  /* Single source of truth for the consulting scheduler link (Google appointment schedule).
     Update this value and the matching URL in the program form's _autoresponse to change it. */
  var CONSULT_URL = 'https://calendar.app.google/Rm2F8heE3YCNpWWE7';
  document.querySelectorAll('[data-consult-link]').forEach(function(a){ a.setAttribute('href', CONSULT_URL); });

  document.querySelectorAll('form.form-card').forEach(function(form){
    var ok = form.querySelector('.form-success');
    // Derive the AJAX endpoint from the form action (insert "ajax/" after the host).
    var endpoint = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
    var successMsg = form.getAttribute('data-success-msg') || 'Thank you. Your message is on its way.';

    function show(msg, isError){
      if(!ok) return;
      ok.textContent = msg;
      ok.classList.toggle('error', !!isError);
      ok.classList.add('show');
      ok.scrollIntoView({behavior:'smooth', block:'center'});
    }

    form.addEventListener('submit', function(ev){
      ev.preventDefault();
      // Required-field check
      var required = form.querySelectorAll('[required]');
      var valid = true;
      required.forEach(function(f){
        if((f.type === 'checkbox' && !f.checked) || (f.type !== 'checkbox' && !f.value.trim())){
          valid = false; f.style.borderColor = '#ef4444';
        } else { f.style.borderColor = ''; }
      });
      if(!valid){ return; }

      var btn = form.querySelector('button[type=submit]');
      var original = btn.textContent;
      btn.disabled = true; btn.textContent = 'Sending…';

      fetch(endpoint, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      })
      .then(function(r){ return r.json(); })
      .then(function(data){
        if(data && (data.success === 'true' || data.success === true)){
          show(successMsg, false);
          form.reset();
          btn.textContent = 'Submitted';
        } else {
          // FormSubmit returns a message (e.g. activation required on first use)
          throw new Error((data && data.message) ? data.message : 'Submission failed');
        }
      })
      .catch(function(err){
        btn.disabled = false; btn.textContent = original;
        show(ERROR_MSG, true);
        if(window.console) console.error('Form submission error:', err && err.message);
      });
    });
  });
})();
