import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as d,l as o,n}from"./app.bcb0820c.js";const i={name:"PsCustomButton",props:{type:{type:String,default:"submit"},rounded:{type:String,default:"rounded"},colors:{type:String,default:"bg-feAchromatic-50 dark:bg-feAchromatic-900 text-feSecondary-800 dark:text-feAchromatic-50"},padding:{type:String,default:"py-2 px-4"},border:{type:String,default:"border-none "},shadow:{type:String,default:"shadow-none"},textSize:{type:String,default:"text-sm "},justify:{type:String,default:"flex justify-center items-center "},hover:{type:String,default:"hover:outline-none dark:hover:text-feSecondary-800 dark:active:text-feSecondary-800  hover:bg-fePrimary-50 active:bg-fePrimary-200 dark:hover:bg-feSecondary-500 dark:active:bg-feSecondary-400"},focus:{type:String,default:" dark:focus:text-feAchromatic-50 focus:outline-none focus:bg-feAchromatic-50 dark:focus:bg-feAchromatic-900 focus:ring focus:ring-fePrimary-200"},cursor:{type:String,default:"cursor-pointer"},opacity:{type:String,default:"opacity-100"},disabled:{type:Boolean,default:!1}}},c=["type","disabled"];function f(t,u,e,l,s,y){return r(),d("button",{type:e.type,disabled:e.disabled,class:n([e.disabled?[e.rounded,e.padding,e.border,e.shadow,e.textSize,e.justify,"bg-feSecondary-100 text-feSecondary-300 dark:text-feSecondary-600 dark:bg-feSecondary-700 cursor-not-allowed opacity-90"]:[e.rounded,e.colors,e.padding,e.border,e.shadow,e.textSize,e.hover,e.focus,e.cursor,e.opacity,e.justify],"font-medium transition duration-150 ease-in-out"])},[o(t.$slots,"default")],10,c)}var m=a(i,[["render",f]]);export{m as default};
