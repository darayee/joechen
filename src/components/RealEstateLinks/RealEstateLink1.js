import propertyTax from '../../img/Property-Tax.jpeg'

const realEstateLink1 = () => {
    return (
        <div className='realEstateLink'>
            <h5>新泽西地税简介
                <img src={propertyTax} className='propertyTaxImg'></img>
            </h5>
            <p>地税是每个家庭的刚性支出，在选择居住地点时要纳入重要考量.</p>
            <p>地税的计算方法比较简单：地税=房屋估值*地税税率。地点确定之后，税率就已确定。唯一可变的是房屋估值，如果觉得估值过高，可以向估值公司要求重新估值。
            新泽西的各个County，每个County的各个District，地税税率不同，具体信息可以在NJ政府网站查询, 能查到不同年份，不同County，不同District的地税税率：<a href='http://www.state.nj.us/treasury/taxation/lpt/taxrate.shtml' target='_blank'>http://www.state.nj.us/treasury/taxation/lpt/taxrate.shtml</a></p>
            <p>由于地方政府和公共教育主要由地税支撑，而这些费用近年来稳步增长。新泽西州的地方政府几乎完全依赖于地税，而在其他州，地方政府能从销售税和个人所得税中得到部分资助。新泽西由于历史原因，市镇和学区众多，各政府职能部门齐全，是全美地税(Property Tax)较高的州之一，有投资分析师指出，若以所缴地税与房屋估值占比计算，新州比率超过2%</p>
            <p>好的一面是：在经济允许的情况下，伴随高地税而来的是较好的基础建设和服务，尤其是好学区。</p>
        </div>
    )
}

export default realEstateLink1;