import _ from 'lodash';

export default (object) => {
	object.name = _.capitalize(object.name);
	object.description = object.description.toLowerCase();
}