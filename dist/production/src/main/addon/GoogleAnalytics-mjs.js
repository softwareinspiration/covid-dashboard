(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{8:function(e,a,t){"use strict";t.r(a);var n=t(0);class o extends n.a{static getConfig(){return{className:"Neo.main.addon.GoogleAnalytics",singleton:!0}}constructor(e){super(e),this.insertGoogleAnalyticsScript()}insertGoogleAnalyticsScript(){function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-153734404-1");const a=document.createElement("script");Object.assign(a,{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-153734404-1"}),document.head.appendChild(a)}}Neo.applyClassConfig(o);let s=Neo.create(o);Neo.applyToGlobalNs(s),a.default=s}}]);