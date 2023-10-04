const tabs = Array.from(document.querySelectorAll('.tab'));
const tabsContent = Array.from(document.querySelectorAll('.tab__content'));
let tabIndex = null;

tabs.forEach((tab, index) => {
  tab.onclick = function() {
    tabIndex = index;

    tabsContent.forEach((tab) => tab.classList.remove('tab__content_active'));
    tabsContent[tabIndex].classList.add('tab__content_active');

    tabs.forEach((tab) => tab.classList.remove('tab_active'));
    tabs[tabIndex].classList.add('tab_active');
  }
})
