import septic from '../../img/septic.jpeg';

const RealEstateLink5 = () => {
    return (
        <div className='realEstateLink'>
            <h5>浅谈Septic
                <img src={septic} className='septic'/>
            </h5>
            <p>哪里在用：美国有很多人在使用Septic，很多地方由于历史和人口密度的原因，没有城市的上下水管线，使用Septic，各州比例不同，从Vermont的55%到California的10% 好处：减少疾病传播，减少人与病菌接触机会；减少对地表水的污染，保护环境；减少收集和处理废水的机构和能量消耗，有经济效益。 原理：包含一个Septic Tank和一个Drainfield，或者Soil Absorption field. 所有废水从房内通过一个主要下水管排到SepticTank。 Septic Tank埋在地下，通常是由水泥、或玻璃纤维制成。它把漂浮物(油脂和纸等)和固体从废水中分离，漂浮物浮在水面形成Scum，固体沉入水底形成Sludge沉淀物，废水经过两层分离，从Outlet口排出到Drainfield。 Drainfileld的土壤负责接受、处理和降解，土壤自然清除了有害的细菌、病毒和营养物等。  主要可能出现的问题： Clogged Drainfiled，如果阻塞了，废水不能被土壤吸收，会在地上形成废水坑或者倒灌回房子。 标志： 废水倒灌回房子。 非常绿的草在Drainfield上面，甚至在旱季。 有水或泥潭在Septic或者房子周围。 有恶臭。 预防措施： 定期做Septic Pump，把漂浮物和固体抽走，防止进入Drainfield阻塞水流到土壤。 不要超过设计能力使用。 不要大量集中洗衣，漂白水和洗涤剂会杀死有益菌群。 出现问题，求助professional，避免更大的损失。</p>
        </div>
    )
}

export default RealEstateLink5;