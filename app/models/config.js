import DS from 'ember-data';

export default DS.Model.extend({
	isPageEdited: DS.attr('boolean'),
	isPageEditedTime: DS.attr('string'),
	
	getPageEditDate: function(){
    var target = moment(this.get('isPageEditedTime'));
    return target.format('MMM Do YY');
  }.property('isPageEditedTime'), 
});
