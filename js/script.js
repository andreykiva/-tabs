window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const tabsCreator = (tabsHeaderItems, tabsHeader, tabsContentItems) => {
    const tab = document.querySelectorAll(`.${tabsHeaderItems}`),
      info = document.querySelector(`.${tabsHeader}`),
      tabContent = document.querySelectorAll(`.${tabsContentItems}`);

    const hideTabContent = a => {
      for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove("show");
        tabContent[i].classList.add("hide");
      }
    };

    hideTabContent(1);

    const showTabContent = b => {
      if (tabContent[b].classList.contains("hide")) {
        tabContent[b].classList.remove("hide");
        tabContent[b].classList.add("show");
      }
    };

    info.addEventListener("click", e => {
      let target = e.target;
      if (target && target.classList.contains(`${tabsHeaderItems}`)) {
        for (let i = 0; i < tab.length; i++) {
          if (target === tab[i]) {
            hideTabContent(0);
            showTabContent(i);
            break;
          }
        }
      }
    });
  };
});
