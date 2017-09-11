//商品表
var GoodsInfoModel = 
{
	CreateNew:  function ()
	{
		var goodsInfoModel;
		goodsInfoModel.id = "";//商品id
		goodsInfoModel.name = "";//商品名
		goodsInfoModel.shopId = "";//店铺名
		goodsInfoModel.typeId = "";//类型名
		goodsInfoModel.goodsInfo = "";//备注
		return goodsInfoModel;
	}
	
}

//店铺表
var ShopInfoModel = 
{
	CreateNew:  function ()
	{
		var shopInfoModel;
		shopInfoModel.id = "";//店铺id
		shopInfoModel.name = "";//店铺名
		shopInfoModel.shopkeeper = "";//店主名
		shopInfoModel.phone = "";//联系电话
		shopInfoModel.position = "";//位置
		return shopInfoModel;
	}
	
}

//分类表
var TypeInfoModel = 
{
	CreateNew:  function ()
	{
		var typeInfoModel;
		typeInfoModel.id = "";//分类id
		typeInfoModel.name = "";//分类名
		typeInfoModel.remarks = "";//备注
		return typeInfoModel;
	}
	
}

//图片信息表
var ImageInfoModel = 
{
	CreateNew:  function ()
	{
		var imageInfoModel;
		imageInfoModel.id = "";//图片id
		imageInfoModel.goodsId = "";//商品id
		imageInfoModel.iconUrl = "";//缩略图路径
		imageInfoModel.imageUrl = "";//原图片路径
		imageInfoModel.uploadTime = "";//上传时间
		return imageInfoModel;
	}
	
}
