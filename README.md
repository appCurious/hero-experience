# Prototyping Custom Hero Image Element
A custom element for use with a sites hero image which allows user interaction to display more information

## Manual Site Testing ( on an existing site already hosted )
It's a way to see what the custom element would look like on someone's existing site
Use the script and text below to create the html entities necessary for the component to display

### When you are able to supply a target element selector
*  copy the function and paste it into the console
*  update the parameters to target an existing element on the page
*  then paste the hero-element.js file contents into the script tag that was created


```

function createMyHero (selector, position) {
	const hed = document.querySelector('head');
	const s = document.createElement('script');
	s.id="my-hero-element-script";
	s.type="module";
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
			productid="123"
			fullscreenPosition="fixed"
			fullscreenZindex="20012"
			canExpandHeight="true"
			canExpandWidth="true">
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
* then paste the hero-element.js file contents into the script tag that was created

```
createMyHero();
```