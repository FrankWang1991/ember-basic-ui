import Controller from '@ember/controller';
import { A } from '@ember/array';

export default Controller.extend({
	init() {
		this._super(...arguments);
		this.set('readyOptions', A([
			{ id: 1, value: 'a' },
			{ id: 2, value: 'b' },
			{ id: 3, value: 'c' },
		]));
		// this.set('option', 1);
	},

	actions: {
		changeOption(value) {
			console.table(value);
			console.log('in controller ');
			this.set('option', value);
		}
	}
});
