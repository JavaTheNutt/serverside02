angular.module('myApp').factory('GenerateForm', function () {
	return{
		getCompanyForm: [
				{
					id: 'companyname',
					label: {
						text: 'Company Name'
					},
					inputField: {
						placeholder: 'Company Name',
						model: ''
					}
				},
				{
					id: 'companycity',
					label:{
						text: 'Company City'
					},
					inputField:{
						placeholder: 'Company City',
						model: ''
					}
				},
				{
					id: 'representative',
					label: {
						text: 'Company Representative'
					},
					inputField: {
						placeholder: 'Company Representative',
						model: ''
					}
				},
				{
					id: 'representativeemail',
					label: {
						text: 'Company Representative Email'
					},
					inputField: {
						placeholder: 'Company Representative Email',
						model: ''
					}
				},
				{
					id: 'website',
					label: {
						text: 'Website'
					},
					inputField: {
						placeholder: 'Website',
						model: ''
					}
				}
			]
	}
});