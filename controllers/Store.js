
   
const { Product, Variant, Image } = require('../models')

const index = async (req, res) => {
	const products = await Product.findAll({
		include: [
			{ model: Variant, include: [Image] }
		]
	})
	res.render('views/store/index', { products })
}

const show = async (req, res) => {
    let variant;
    let product;
    if(req.params.slug!=='app.css'&&req.params.slug!=='app.js'){
        product = await Product.findOne({ 
            where: { slug: req.params.slug },
            include: [
                { model: Variant, include: [Image] }
            ]
        })
        variant = product.Variants[0]

	    if (req.query.v) {
		variant = product.Variants.find(v => v.slug === req.query.v)
	}
    }
	res.render('views/store/show', { product, variant })
}

module.exports = { index, show }