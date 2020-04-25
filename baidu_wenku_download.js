// ==UserScript==
// @name         【百度文库文档免费在线下载助手】
// @namespace    http://tampermonkey.net/
// @version      1.0.4
// @description  免费解析下载百度文库文档在线下载工具助手
// @author       www.wenkushe.zone
// @include      *://wenku.baidu.com/view/*
// @require      https://cdn.bootcss.com/jquery/2.1.2/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    addCss();
    addBtn1();
    addBtn2();
    addDownloadBtnEvent(getDownloadURL());

    function addBtn1(){
                var doc_tag_wrap = $(".doc-tag-wrap");
                if(doc_tag_wrap && doc_tag_wrap.length){
                   var download = "<div id='wenkudownload-wenkushe'style='display: block; padding: 7px 15px; line-height: 40px; text-align: center; vertical-align: top; background-color: #dd5a57; cursor: pointer; color: #fff;margin-bottom: 20px;'><p style='font-size:16px;color:#fff'>下载此文档(免费版)</p></div>";
                   $(".doc-tag-wrap").prepend(download);
                }else{
                  var download = "<div id='wenkudownload-wenkushe'style='display: block; padding: 7px 15px; line-height: 40px; text-align: center; vertical-align: top; background-color: #dd5a57; cursor: pointer; color: #fff; margin-bottom: 20px; position: fixed; left: 0; top: 260px; width: 83px; z-index: 9999; '><p style='font-size:16px;color:#fff'>下载此文档(免费版)</p></div>";
                  $("body").append(download);
                };
    }
     function addBtn2(){
                var doc_tag_wrap = $(".doc-tag-wrap");
                if(doc_tag_wrap && doc_tag_wrap.length){
                   var download = "<div id='wenkudownload-wenkushe-pro'style='display: block; padding: 7px 15px; line-height: 40px; text-align: center; vertical-align: top; background-color: #25ae84; cursor: pointer; color: #fff;margin-bottom: 2px;'><p style='font-size:16px;color:#fff'>下载此文档(专业版)</p></div>";
                   $(".doc-tag-wrap").prepend(download);
                }else{
                  var download = "<div id='wenkudownload-wenkushe-pro'style='display: block; padding: 7px 15px; line-height: 40px; text-align: center; vertical-align: top; background-color: #25ae84; cursor: pointer; color: #fff; margin-bottom: 2px; position: fixed; left: 0; top: 358px; width: 83px; z-index: 9999;'><p style='font-size:16px;color:#fff'>下载此文档(专业版)</p></div>";
                  $("body").append(download);
                };
    }

    function getDownloadURL(){
        return window.location.href;
    }

    function addCss(){
        var style = document.createElement("style");
        style.type = "text/css";
        var text = document.createTextNode("@keyframes change { 0% { background: #caa10b; } 25% { background: #ff0202; } 50% { background: #9f02ff; } 75% { background: #024eff; } 100% { background: #0a9801; } }");
        style.appendChild(text);
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(style);
    }

   function addDownloadBtnEvent(url){
       url = encodeURIComponent(url);
       $("#wenkudownload-wenkushe").click(function(){
            window.open('http://www.wenku.zone/?from=yh-git&url=' + url, '_blank');
       });
       $("#wenkudownload-wenkushe-pro").click(function(){
            window.open('http://pro.wenku.zone/?from=yh-git&url=' + url, '_blank');
       });
   }
})();
