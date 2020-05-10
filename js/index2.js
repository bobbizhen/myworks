

$(function(){
	// $(window).scroll( function() {
	// 	console.log(1);
	// })
})

	
	
var vm = new Vue({
	el:'#app',
	data:{
		works:[
			{
				pic:'images/bank_客户分析系统.jpg',
				video:'',
				title:'客户分析系统',
				classify:'银行金融',
				time:'交互 UI 前端'
			},
			{
				pic:'images/default.jpg',
				video:'images/图标动画.mp4',
				title:'图标动效',
				classify:'建筑地产',
				time:'交互动效'
			},
			{
				pic:'images/地产_供应商协同平台.jpg',
				video:'',
				title:'供应商协同平台',
				classify:'建筑地产',
				time:'UI 前端'
			},
			{
				pic:'images/政企云.jpg',
				video:'',
				title:'中国移动政企云',
				classify:'通信政府',
				time:'UI'
			},
			{
				pic:'images/SAP_界面优化.jpg',
				video:'',
				title:'SAP_界面优化',
				classify:'建筑地产',
				time:'UI 前端'
			},
			{
				pic:'images/中国建投-股权投资产业经营.jpg',
				video:'',
				title:'股权投资产业经营',
				classify:'建筑地产',
				time:'UI'
			},
			{
				pic:'images/移动端-物业app.jpg',
				video:'',
				title:'物业相关app',
				classify:'建筑地产',
				time:'UI'
			},
			{
				pic:'images/标签拖拽删除.jpg',
				video:'images/标签拖拽删除.mp4',
				title:'标签拖拽动效',
				classify:'建筑地产',
				time:'交互动效'
			},
			{
				pic:'images/移动端-客户app.jpg',
				video:'',
				title:'地产客户app',
				classify:'建筑地产',
				time:'UI'
			},
			{
				pic:'images/地产-移动办公app.jpg',
				video:'',
				title:'移动办公app',
				classify:'建筑地产',
				time:'UI'
			},
			{
				pic:'images/联动-上移-缩小透明-模糊.jpg',
				video:'images/联动-上移-缩小透明-模糊.mp4',
				title:'联动上移动效',
				classify:'建筑地产',
				time:'交互动效'
			},
			{
				pic:'images/picview01.jpg',
				video:'',
				title:'H5页面',
				classify:'银行金融',
				time:'UI 前端'
			},
			{
				pic:'images/picview03.jpg',
				video:'',
				title:'智链融资贷款',
				classify:'金融',
				time:'前端'
			},
			{
				pic:'images/default.jpg',
				video:'images/装车系统演示flash.mp4',
				title:'装车系统演示flash',
				classify:'能源',
				time:'交互动效'
			},
			{
				pic:'images/picview04.jpg',
				video:'',
				title:'党建学习平台',
				classify:'党建政府',
				time:'UI 前端'
			},
			{
				pic:'images/picview06.jpg',
				video:'',
				title:'华润供应商·万科电商',
				classify:'建筑地产',
				time:'UI 前端'
			},
			{
				pic:'images/picview05.jpg',
				video:'',
				title:'工业云·兴业云·城市云',
				classify:'政府国企',
				time:'UI 前端'
			},
			{
				pic:'images/picview08.jpg',
				video:'',
				title:'融创供应商',
				classify:'建筑地产',
				time:'UI 前端'
			},
			{
				pic:'images/picview09.jpg',
				video:'',
				title:'大屏显示',
				classify:'政府机构',
				time:'UI'
			},
			{
				pic:'images/default.jpg',
				video:'images/联动香水（page、位移、缩放）.mp4',
				title:'联动动效',
				classify:'建筑地产',
				time:'交互动效'
			},
		],
		detail:{
				pic:'images/联动-上移-缩小透明-模糊.jpg',
				video:'images/联动-上移-缩小透明-模糊.mp4',
				title:'联动上移动效',
				classify:'建筑地产',
				time:'交互动效'
			},
		close:false,
	},
	computed:{
		
	},
	mounted(){
	},
	methods:{
		openModal(index){
			this.detail = this.works[index];
			$('#myModal').modal('show');
			this.close = true;
		},
		closeModal(){
			$('#myModal').modal('hide');
			this.close = false;
		},
		goTo(param){
			window.open('imgsee.html?p='+param);
		},
		//随机取数
		getRandomArrayElements(arr, count) {
		    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
		    while (i-- > min) {
		        index = Math.floor((i + 1) * Math.random());
		        temp = shuffled[index];
		        shuffled[index] = shuffled[i];
		        shuffled[i] = temp;
		    }
		    return shuffled.slice(min);
		},
	}
})
