var full_page = document.getElementsByClassName("full_page");
if (full_page.length != 0) {
  full_page[0].style.background = "transparent";
}

"" === GLOBAL_CONFIG_SITE.title.replace("EthanLoo", "") ? document.getElementById("page-name-text").style.display = "none" : document.querySelector("#page-name-text>span").innerHTML = document.title.split(" | EthanLoo")[0];