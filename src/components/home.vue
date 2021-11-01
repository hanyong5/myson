<template>
  <div class="linkView">
    <a href="http://m.cgntv.net/tv/31000/1.cgn" target="_blank">온라인 생명의 삶</a>
  </div>
</template>

<script>
export default {
    name:'home'
}
</script>

<script>
        console.log("view")
      /*
  Android(Chrome)에서는 정상작동
  IOS(Chrome, Safari) 작동 안됨. addEventListener 코드가 돌아야하는데
  API 지원안하는 걸로 추정.

  beforeinstallprompt는 - 설치를 트리거 할 수 있는 유일한 API

  [2021년 최근글]
  https://firt.dev/pwa-2021/#pwa-installation-triggers
*/
useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
        // Prevent the mini-infobar from appearing on mobile
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Update UI notify the user they can install the PWA
        setInstallable(true);
    });

    window.addEventListener('appinstalled', () => {
        // Log install to analytics
        console.log('INSTALL: Success');
    });
}, []);

const handleInstallClick = (e) => {
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the install prompt');
        } else {
            console.log('User dismissed the install prompt');
        }
    });
};
      </script>

<style>
.linkView a{display: block;line-height:50px;background:skyblue;text-align: center;font-weight: bold;font-size: 1.3em;border-radius:5px;color:white}
</style>
