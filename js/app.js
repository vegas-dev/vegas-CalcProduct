const cloneElement = (elementToCloneSelector, wrapperElSelector) => {
	const el = document.querySelector(elementToCloneSelector).cloneNode(true);
	el.classList.remove('clone');
	document.querySelector(wrapperElSelector).append(el);
	return el;
};


const setData = (data) => {
	const {brief, functional} = data;

	for (let item of functional) {
		const el = cloneElement('.functional-check.clone', '.functional-area');
		const {title, price} = item;

		el.querySelector('.functional-check--title').innerText = title;
		el.querySelector('.functional-check--price').innerText = price;
		el.querySelector('.form-check-input').value = price;
	}

	const el = cloneElement('.brief-area.clone', '.brief-wrapper');
	el.querySelector('.brief-title').innerText = brief.title;
	el.querySelector('.brief-price').innerText = brief.price;
    let func = [];


	let $input = document.querySelectorAll('input');
	for (let i = 0; i < $input.length; i++) {
		$input[i].addEventListener('click', () => {
			if ($input[i].type === 'checkbox') {
				if ($input[i].checked) {
                    func.price = $input[i].value;
                    console.log(func);
				}
			}
		})
	}
};


// wrapper
{/* <div class="functional-area"></div> */
}

// template
{/*
<div class="functional-check clone">
  <div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="functionalItemTitle">
    <label class="form-check-label" for="functionalItemTitle">
      <span class="functional-check--title"></span>
      <span class="functional-check--price"></span>
    </label>
  </div>
</div>
*/
}

// const {brief, functional} = data;
// const brief = data.brief;
// const functional = data.functional;

