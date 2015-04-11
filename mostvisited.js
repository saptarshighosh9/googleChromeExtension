// Given an array of URLs, build a DOM list of these URLs in the
// browser action popup.
function buildPopupDom(mostVisitedURLs) {
  var popupDiv = document.getElementById('mostVisited_div');
  k= mostVisitedURLs.length;
  for (var i = 0; i < k; i++) {
    var li = popupDiv.appendChild(document.createElement('ol'));
    var a = li.appendChild(document.createElement('a'));
    a.href = mostVisitedURLs[i].url;
    a.appendChild(document.createTextNode(mostVisitedURLs[i].title));
  }
}
chrome.topSites.get(buildPopupDom);
