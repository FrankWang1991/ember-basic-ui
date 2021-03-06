import Component from '@ember/component';
import layout from '../templates/components/p-button-group';
import { equal } from '@ember/object/computed';

export default Component.extend({
	layout,
	ariaRole: 'group',
	classNameBindings: ['vertical:btn-group-vertical:btn-group'],

	/**
   * @property buttonComponent
   * @type {String}
   * @private
   */
	buttonComponent: 'p-button-group/button',
	/**
   * Set to true for a vertically stacked button group, see http://getbootstrap.com/components/#btn-groups-vertical
   *
   * @property vertical
   * @type boolean
   * @default false
   * @public
   */
	vertical: false,

	/**
   * The type of the button group specifies how child buttons behave and how the `value` property will be computed:
   *
   * ### null
   * If `type` is not set (null), the button group will add no functionality besides Bootstrap styling
   *
   * ### radio
   * if `type` is set to "radio", the buttons will behave like radio buttons:
   * * the `value` property of the button group will reflect the `value` property of the active button
   * * thus only one button may be active
   *
   * ### checkbox
   * if `type` is set to "checkbox", the buttons will behave like checkboxes:
   * * any number of buttons may be active
   * * the `value` property of the button group will be an array containing the `value` properties of all active buttons
   *
   * @property type
   * @type string
   * @default null
   * @public
   */
	type: null,

	/**
   * The value of the button group, computed by its child buttons.
   * See the `type` property for how the value property is constructed.
   *
   * When you set the value, the corresponding buttons will be activated:
   * * use a single value for a radio button group to activate the button with the same value
   * * use an array of values for a checkbox button group to activate all the buttons with values contained in the array
   *
   * @property value
   * @type array
   * @public
   */
	value: null,

	/**
   * @property isRadio
   * @type boolean
   * @private
   */
	isRadio: equal('type', 'radio').readOnly(),

	/**
   * This action is called whenever the button group's value should be changed because the user clicked a button.
   * You will receive the new value of the button group (based on the `type` property), which you should use to update the
   * `value` property.
   *
   * @event onChange
   * @param {*} value
   * @public
   */
	onChange() { },

	actions: {
		pressDownBtn(pressedValue) {
			let newValue = null;

			if (this.get('isRadio')) {
				newValue = pressedValue;
			}
			this.get('onChange')(newValue);
		}
	}
});
