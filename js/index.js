// 创建 Vue 实例，得到 ViewModel
var vm = new Vue({
	el: '#app',
	data: {
		n1: 0,
		n2: 0,
		result: 0,
		opt: '0'
	},
	methods: {
		getResult() {
			switch (this.opt) {
				case '0':
					this.result = parseInt(this.n1) + parseInt(this.n2);
					break;
				case '1':
					this.result = parseInt(this.n1) - parseInt(this.n2);
					break;
				case '2':
					this.result = parseInt(this.n1) * parseInt(this.n2);
					break;
				case '3':
					this.result = parseInt(this.n1) / parseInt(this.n2);
					break;
			}
		}
	}
});
