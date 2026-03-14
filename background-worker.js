chrome.tabs.onCreated.addListener((tab) => {
  if (!tab.active) {
    chrome.tabs.update(tab.id, { active: true });
  }
});