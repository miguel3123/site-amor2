const hearts=document.getElementById('hearts');
function spawnHeart(){if(!hearts)return;const h=document.createElement('span');h.className='heart';h.textContent=Math.random()>0.5?'♥':'✦';h.style.left=Math.random()*100+'vw';h.style.bottom='-20px';h.style.animationDuration=(5+Math.random()*5)+'s';h.style.fontSize=(10+Math.random()*14)+'px';hearts.appendChild(h);setTimeout(()=>h.remove(),10000)}
setInterval(spawnHeart,650); for(let i=0;i<10;i++)setTimeout(spawnHeart,i*180);
const surpriseBtn=document.getElementById('surpriseBtn'); const surprise=document.getElementById('surprise');
if(surpriseBtn) surpriseBtn.addEventListener('click',()=>{surprise.classList.toggle('show');surprise.textContent=['Você desbloqueou +10 pontos de fofura.','Um gatinho aprovou esta página. 🐈‍⬛','Roxo + preto = ciência avançada.','Este botão era completamente inútil. Mas bonito.'][Math.floor(Math.random()*4)]});
const messages=['Você é uma parte bonita deste pequeno universo.','Seu cantinho continua aqui, brilhando baixinho.','Um pouco de roxo para deixar o dia menos cinza.','Até o caos pode ter um lugar fofinho.'];
const messageBtn=document.getElementById('messageBtn'); const message=document.getElementById('message');
if(messageBtn)messageBtn.addEventListener('click',()=>message.textContent=messages[Math.floor(Math.random()*messages.length)]);
const musicBtn=document.getElementById('musicBtn'); if(musicBtn)musicBtn.addEventListener('click',()=>{musicBtn.textContent=musicBtn.textContent.includes('Ativar')?'Clima ativado ♫':'Ativar clima ✦'; document.body.animate([{filter:'brightness(1)'},{filter:'brightness(1.13)'},{filter:'brightness(1)'}],{duration:700})});
const catBtn=document.getElementById('catBtn'); const cat=document.getElementById('cat'); if(catBtn&&cat){catBtn.addEventListener('click',()=>{cat.style.animation='none';cat.offsetHeight;cat.style.animation='walk 7s linear';setTimeout(()=>cat.style.animation='',7200)})}
document.querySelectorAll('.tilt').forEach(card=>{card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(700px) rotateX(${y*-4}deg) rotateY(${x*5}deg) translateY(-4px)`});card.addEventListener('mouseleave',()=>card.style.transform='')});


// Contador para o aniversário de 16 anos
const countdown = document.getElementById('countdown');
if (countdown) {
  const targetDate = new Date('2027-04-18T00:00:00-03:00');
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;
    if (diff <= 0) {
      countdown.innerHTML = '<div style="grid-column:1/-1"><strong>16 anos! 🎉</strong><span>Chegou o aniversário!</span></div>';
      return;
    }
    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    daysEl.textContent = String(days).padStart(3, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}
