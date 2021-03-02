rm -rf site

mkdir site

mkdir site/20210226

mkdir site/20210226/intro
npx middle-manager -md 20210226/intro.md -o site/20210226/intro/index.html

mkdir site/20210226/svg
cp 20210226/exemples_svg_web/css.html site/20210226/svg/css.html
cp 20210226/exemples_svg_web/css_animation.html site/20210226/svg/css_animation.html
cp 20210226/exemples_svg_web/js_event.html site/20210226/svg/js_event.html
cp 20210226/exemples_svg_web/js.html site/20210226/svg/js.html
cp 20210226/exemples_svg_web/js_animation.html site/20210226/svg/js_animation.html
cp 20210226/exemples_svg_web/css_js.html site/20210226/svg/css_js.html

mkdir site/dom
cp -avr modules/manipulation_dom/d3/public site/dom/d3
cp -avr modules/manipulation_dom/js site/dom/js
cp -avr modules/manipulation_dom/react/dist site/dom/react
cp -avr modules/manipulation_dom/svelte/public site/dom/svelte

mkdir site/batons
cp -avr modules/batons/batons_d3_v1/public site/batons/d3_v1
cp -avr modules/batons/batons_d3_v2/public site/batons/d3_v2
cp -avr modules/batons/batons_svelte/public site/batons/svelte

mkdir site/batons_anim
cp -avr modules/batons_anim/batons_anim_d3/public site/batons_anim/d3
cp -avr modules/batons_anim/batons_anim_svelte/public site/batons_anim/svelte

mkdir site/enter_update_exit
cp -avr modules/enter_update_exit/public site/enter_update_exit

mkdir site/rosling
cp -avr modules/rosling/public site/rosling

surge site http://heig-datavis-2021.surge.sh
