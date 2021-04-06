# Prototyping Custom Hero Image Element
A custom element for use with a site's hero image which allows user interaction to display more information.  Concept allows for working with a custom element where the styling and control is given to the website owner.  This prototyping process helps to discover element attributes that empower the owner to control the custom element AND allows the developer to work within the custom element to discover the proper attributes necessary to function effectively.

## Custom Element Attributes
```
	string: product-id="123"
	string: fullscreen-position="fixed" 	(expects css value)
	string: fullscreen-zindex="20012"	(expects css value)
	string: can-expand-height="true"		(used as boolean)
	string: can-expand-width="true"		(used as boolean)
	url:	ec-json="https://myurl.wherever"
	string: hero-reference-selector="#element-selector" (expects a javascript query selector)
```

## What It Does
*  Allows an icon to be positioned over a hero image that can be interacted with to display a ribbon with more options
*  Ribbon display slides out to present more interactable items
*  Interactable Items are clickable and present more information or more details over the hero image
*  More details can be clicked to go fullscreen and take over the entire window view
*  Original style values are preserved and restored after fullscreen view is returned to normal viewing mode
## Manual Site Testing ( on an existing site already hosted )
It's a way to see what the custom element would look like on someone's existing site
Use the script and text below to create the html entities necessary for the component to display

### When you are able to supply a target element selector
*  copy the function and paste it into the console
*  update the parameters to target an existing element on the page
*  script src points to the hero-element.js file
*  (local developemnt point it to your local host)


```

function createMyHero (selector, position) {
	const hed = document.querySelector('head');
	const s = document.createElement('script');
	s.id="my-hero-element-script";
	s.type="module";
	s.src = "https://cdn.jsdelivr.net/gh/appCurious/hero-experience/hero-element.js";
	hed.append(s);
	
	if (selector && position) {
		const target = document.querySelector(selector);
		const customElementHtml = `<style>
			.my-hero-parent {
				position: relative;
				position: fixed;
				position: absolute;
				
				
				height: 100%;
				width: 100%;
				/*height: inherit;*/
				/*width: inherit;*/
				
				z-index: 20012;
			}
		</style>
		<my-hero-experience 
			class="my-hero-parent" 
			product-id="123"
			fullscreen-position="fixed"
			fullscreen-zindex="20012"
			can-expand-height="true"
			can-expand-width="true"
			hero-reference-selector="">
		</my-hero-experience>`
		
		if (target) {
			target.insertAdjacentHTML(position, customElementHtml);    
		}
	}
}

createMyHero('#realHeroContainer','afterbegin');

```

### Alternate Manual Creation
* copy the custom element style and element text from the function
* edit an existing element as html and paste where the custom element is to display
* copy the function and paste it to the console
* run the script with no parameters

```
createMyHero();
```