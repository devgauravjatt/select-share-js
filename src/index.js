// this a free open source project by Dev Gaurav Jatt
// github link = https://github.com/devgauravjatt/select-share-js

try {
	// big text and code store here
	const htmlCodeArray = [
		{
			name: 'twitter',
			code: `<a href="/" target="_blank" class="select-share-js-btn select-share-js-btn-twitter">
			<svg xmlns="http://www.w3.org/2000/svg" height="21" width="20" viewBox="0 0 512 512">
			<path fill="#0094f7" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
		   </svg>
			</a>`,
			darkCode: `<a href="/" target="_blank" class="select-share-js-btn select-share-js-btn-twitter">
			<svg xmlns="http://www.w3.org/2000/svg" height="21" width="20" viewBox="0 0 512 512">
			<path fill="#ffffff" d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
		   </svg>
			</a>`,
		},
		{
			name: 'linkedin',
			code: `<a href="/" target="_blank" class="select-share-js-btn select-share-js-btn-linkedin">
			<svg xmlns="http://www.w3.org/2000/svg" height="21" width="20" viewBox="0 0 448 512">
			<path fill="#0a63bc" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
			</svg>
			</a>`,
			darkCode: `<a href="/" target="_blank" class="select-share-js-btn select-share-js-btn-linkedin">
			<svg xmlns="http://www.w3.org/2000/svg" height="21" width="20" viewBox="0 0 448 512">
			<path fill="#ffffff" d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
			</svg>
			</a>`,
		},
		{
			name: 'facebook',
			code: `<a href="/" target="_blank" class="select-share-js-btn select-share-js-btn-facebook">
			<svg xmlns="http://www.w3.org/2000/svg" height="20" width="21" viewBox="0 0 320 512">
         <path fill="#0070f5" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
         </svg>
         </a>`,
			darkCode: `<a href="/" target="_blank" class="select-share-js-btn select-share-js-btn-facebook">
			<svg xmlns="http://www.w3.org/2000/svg" height="20" width="21" viewBox="0 0 320 512">
         <path fill="#ffffff" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
         </svg>
         </a>`,
		},
		{
			name: 'whatsapp',
			code: `<a href="/" target="_blank" class="select-share-js-btn select-share-js-btn-whatsapp">
			<svg xmlns="http://www.w3.org/2000/svg" height="20" width="21" viewBox="0 0 448 512">
			<path fill="#00bd07" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
		   </svg>
			</a>`,
			darkCode: `<a href="/" target="_blank" class="select-share-js-btn select-share-js-btn-whatsapp">
			<svg xmlns="http://www.w3.org/2000/svg" height="20" width="21" viewBox="0 0 448 512">
			<path fill="#ffffff" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
		   </svg>
			</a>`,
		},
		{
			name: 'email',
			code: `<a href="/" target="_blank" class="select-share-js-btn select-share-js-btn-email">
			<svg xmlns="http://www.w3.org/2000/svg" height="20" width="21" viewBox="0 0 512 512">
			<path fill="#f04235" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
			</svg>
			</a>`,
			darkCode: `<a href="/" target="_blank" class="select-share-js-btn select-share-js-btn-email">
			<svg xmlns="http://www.w3.org/2000/svg" height="20" width="21" viewBox="0 0 512 512">
			<path fill="#ffffff" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
			</svg>
			</a>`,
		},
	]

	const cssTheme = `/* this css code for select-share-js theme */
	#select-share-js{position:absolute;display:none}.select-share-js-main{background:#e0e5ec;display:flex;flex-direction:row;justify-content:space-around;align-items:center;position:relative;border-radius:5px}.select-share-js-btn{height:28px;width:35px;border-radius:3px;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:16px;text-decoration:none}.select-share-js-btn:hover{box-shadow:0 0px 4px 0 rgba(255,255,255,0.5),-4px -4px 6px 0 rgba(116,125,136,0.2),inset -4px -4px 6px 0 rgba(255,255,255,0.5),inset 4px 4px 6px 0 rgba(116,125,136,0.3)}@media screen and(max-width:1000px){.select-share-js-main{border-radius:3px}.select-share-js-btn{border-radius:0}}`

	let Select_share = document.querySelector('#select-share-js')
	const Select_share_main = document.createElement('div')
	Select_share_main.classList.add('select-share-js-main')
	Select_share.appendChild(Select_share_main)

	const getTheme = Select_share.getAttribute('theme')
	const getReadMore = Select_share.getAttribute('readmore')
	const getAllAttributes = Select_share.attributes
	const allAttributes = Array.from(getAllAttributes)

	// apply theme with css element
	const style = document.createElement('style')
	style.setAttribute('type', 'text/css')
	style.innerHTML = cssTheme
	document.body.appendChild(style)

	if (getTheme === 'dark') {
		const select_main = document.querySelector('.select-share-js-main')
		select_main.style.backgroundColor = '#272727'
	}

	// get all btn by user
	allAttributes.forEach((attribute) => {
		try {
			if (attribute.name !== 'id' && attribute.name !== 'theme' && attribute.name !== 'readmore') {
				const name = attribute.name
				const value = attribute.value
				if (value === 'true') {
					if (getTheme === 'dark') {
						const code = htmlCodeArray.find((item) => item.name === name).darkCode
						Select_share_main.innerHTML += code
					} else {
						const code = htmlCodeArray.find((item) => item.name === name).code
						Select_share_main.innerHTML += code
					}
				}
			}
		} catch (err) {}
	})

	function getSelectedText() {
		let text = ''
		if (window.getSelection) {
			text = window.getSelection().toString()
		} else if (document.selection && document.selection.type !== 'Control') {
			text = document.selection.createRange().text
		}
		return text
	}

	document.addEventListener('mouseup', function () {
		let selectedText = getSelectedText()

		if (selectedText) {
			showSelect_share(selectedText)
		} else {
			hideSelect_share()
		}
	})

	const readmoreText = (text) => {
		if (getReadMore === 'true') {
			const getLink = window.location
			const ReadMore = `${text}  📑Read More:- ${getLink}`
			return ReadMore
		} else {
			return text
		}
	}

	const makeShareLink = (text) => {
		allAttributes.forEach((attribute) => {
			try {
				if (attribute.name !== 'id' && attribute.name !== 'theme' && attribute.name !== 'readmore') {
					const name = attribute.name
					const webName = document.querySelector(`.select-share-js-btn-${name}`)

					// for twitter share link add
					if (webName && name === 'twitter') {
						const ShareText = text.substring(0, 280)
						const getShareText = readmoreText(ShareText)
						webName.href = `https://twitter.com/intent/tweet?text=${getShareText}`
					}

					// for linkedin share link add
					if (webName && name === 'linkedin') {
						const ShareText = text.substring(0, 1000)
						const getShareText = readmoreText(ShareText)
						webName.href = `https://www.linkedin.com/shareArticle?mini=true&url=${getShareText}`
					}

					// for facebook share link add
					if (webName && name === 'facebook') {
						const ShareText = text.substring(0, 1000)
						const getShareText = readmoreText(ShareText)
						webName.href = `https://www.facebook.com/sharer/sharer.php?u=${getShareText}`
					}

					// for whatsapp share link add
					if (webName && name === 'whatsapp') {
						const ShareText = text.substring(0, 1000)
						const getShareText = readmoreText(ShareText)
						webName.href = `https://wa.me/?text=${getShareText}`
					}

					// for email share link add
					if (webName && name === 'email') {
						const ShareText = text.substring(0, 1000)
						const getShareText = readmoreText(ShareText)
						webName.href = `mailto:?subject=Done web&body=${getShareText}`
					}
				}
			} catch (err) {}
		})
	}

	function showSelect_share(text) {
		makeShareLink(text)
		let Select_share = document.getElementById('select-share-js')
		Select_share.style.display = 'block'

		// Position the Select_share above the selected text
		let selection = window.getSelection()
		let range = selection.getRangeAt(0)
		let rect = range.getBoundingClientRect()

		Select_share.style.top = rect.top - Select_share.offsetHeight - 5 + 'px'
		Select_share.style.left = rect.left + (rect.width - Select_share.offsetWidth) / 2 + 'px'
	}

	function hideSelect_share() {
		Select_share.style.display = 'none'
	}
} catch (err) {
	console.log('😪 This is error from Select-share-js :- ', err.massage)
}
