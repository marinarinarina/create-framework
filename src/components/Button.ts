import Component from './Component';

type EventCallbackFn = () => void;

export default class Button extends Component {
	readonly element: HTMLButtonElement;

	public onClick: EventCallbackFn = () => {
		throw new Error('버튼 컴포넌트에 클릭 핸들러를 부착해야 함');
	};

	constructor(text: string) {
		super();
		this.element = document.createElement('button');
		this.element.textContent = text;
		this.element.addEventListener('click', (e: Event) => {
			e.preventDefault();
			e.stopPropagation();
			this.onClick();
		});
	}
}
