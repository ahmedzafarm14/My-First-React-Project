import React from 'react'
import section_one_img from '../Images/section_one_img.png'
import image_60 from "../Images/image_60.png"
import image_61 from "../Images/image_61.png"
import image_62 from "../Images/image_62.png"
import "./MainSection.css"
import Button from './Button'
import Cards from './Cards'
import Section2 from './Section2'
import CardBottom from './CardBottom'
import Footer from './Footer'
import card6 from '../Images/card2.png'
import card5 from '../Images/card1.png'
import card7 from '../Images/card3.png'
import card8 from '../Images/card4.png'
import one from '../Images/imageone.png'
import two from '../Images/imagetwo.png'
import four from '../Images/imagefour.png'
import five from '../Images/imagefive.png'
import six from '../Images/imagesix.png'
import three from '../Images/imagethree.png'
import award from '../Images/award.png';
import delivery from '../Images/delivery.png'
import painting from '../Images/painting.png'
import fruit from '../Images/fruit.png'
import Rectangle from './Rectangle'
import eik from '../Images/eik.png'
import doo from '../Images/doo.png'
import teen from '../Images/teen.png'
import char from '../Images/char.png'

const MainSection = () => {

    const card1 = {
        Im:card5,
        cardName:"card1",
        h1:"Patches",
        p:"Create embroidered patches, woven patches, leather patches, and more to show off your artwork or rep your organization.",
        h3:"Create a Custom patch"
    }
    const card2 = {
        Im:card6,
        cardName:"card1",
        h1:"Leather Patches",
        p:"Create embroidered patches, woven patches, leather patches, and more to show off your artwork or rep your organization.",
        h3:"Create a Custom patch"
    }
    const card3 = {
        Im:card7,
        cardName:"card1",
        h1:"Sublimated Patches",
        p:"Create embroidered patches, woven patches, leather patches, and more to show off your artwork or rep your organization.",
        h3:"Create a Custom patch"
    }
    const card4 = {
        Im:card8,
        cardName:"card1",
        h1:"PVC Patches",
        p:"Create embroidered patches, woven patches, leather patches, and more to show off your artwork or rep your organization.",
        h3:"Create a Custom patch"
    }
    const cardTop1={
        im:award,
        h2:"Top Quality",
        p:"Make stuff actually buy, create beautiful, retail-ready custom products with the same QC standards as leading fashion brands"
    }
    const cardTop2={
        im:painting,
        h2:"Unlimited Customization",
        p:"Let your imagination run wild. We create every product from scratch so you can customize every last detail."
    }
    const cardTop3={
        i:1,
        im:fruit,
        h2:"Low minimums",
        p:"No more sticker shock. Get small-batch custom manufacturing with low upfront costs and eye-widening profit margins."
    }
    const cardTop4={
        im:delivery,
        h2:"Quick Turnaround",
        p:"No timeline is too tight for our rapid small- batch supply chain - let us know when you’ll need products and we’ll make it happen!"
    }
    const ID1={
        h2:"Embride keychains",
        im:eik
    }
    const ID2={
        h2:"Sublimated Patches",
        im:doo
    }
    const ID3={
        h2:"PVC Keychains",
        im:teen
    }
    const ID4 ={
        h2:"Stickers",
        im:char
    }
    return (
        <div>
            <div className='main1'>
                <div>
                    <h1 className='heading_black'>Create Custom Embroided<span className='heading_blue'>Patches</span></h1>
                    <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It</p>
                    <div className='btnDiv'>
                        <Button ID={"Get Started"}/>
                        <Button ID={"Live Chat"}/>
                    </div>
                </div>
                <div className='Img'>
                    <img src={section_one_img} alt='image1'/>
                    <div class="ellipse"></div>
                </div>
            </div>
            <div className="main2">
                <div className="text_div">
                <h1 className='main2_h1'>The fastest way to grow your business with the leader in Technology</h1>
                <h1 className='main2_h2'>Check out our options and features included.</h1>
                </div>
            </div>
            <div className='Info'>
                <Cards ID={cardTop1}/>
                <Cards ID={cardTop2}/>
                <Cards ID={cardTop3}/>
                <Cards ID={cardTop4}/>
            </div>
            <div className='2ndsec'>
                <Section2/>
            </div>
            <div className="main3">
                <div className="text_div">
                <h1 className='main3_h1'>Custom Patches Categories</h1>
                <h1 className='main3_h2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</h1>
                </div>
            </div>
            <div className='maindivcard'>
                <div className='cardDiv'>
                    <CardBottom data ={ card1} />
                    <CardBottom data ={ card2} />
                    <CardBottom data ={ card3} />
                    <CardBottom data ={ card4} />
                </div>
                <div className='cardDiv'>
                    <CardBottom data ={ card2}/>
                    <CardBottom data ={ card4}/>
                    <CardBottom data ={ card1}/>
                    <CardBottom data ={ card3}/>
                </div>
            </div>
            <div className="main4">
            <div className="text_div">
                <h1 className='main2_h1' style={{fontSize:"48px"}}> So what are you waiting for?</h1>
                <h1 className='main2_h2' style={{fontSize:"40px"}}>Let’s Make Something Unique Together!</h1>
                <p className='main4_para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='btnDiv'>
                    <Button ID={"Get Started"}/>
                    <Button ID={"Chat With Us"}/>
                </div>
                <img src={one} className='onee' alt='img.png'></img>
                <img src={two} className='twoo' alt='img.png'></img>
                <img src={three} className='three' alt='img.png'></img>
                <img src={four} className='four' alt='img.png'></img>
                <img src={five} className='five' alt='img.png'></img>
                <img src={six} className='six' alt='img.png'></img>
                </div>
            </div>
            <div className="main3">
                <div className="text_div">
                <h1 className='main3_h1'>Shop With Confidence</h1>
                </div>
                <div className='aboutDiv'>
                    <div className='aboutCard'>
                        <img src={image_60} alt='image60'/>
                        <h1>Customer Testimonials</h1>
                        <p>Hear about our customer experience, Veiw all</p>
                    </div>
                    <div className='aboutCard'>
                        <img src={image_61} alt='image60'/>
                        <h1>365 - Day Return</h1>
                        <p>Simple. we accept returns up to 365 days froms the delivery date.</p>
                    </div>
                    <div className='aboutCard'>
                        <img src={image_62} alt='image60'/>
                        <h1>Patch Rewards</h1>
                        <p>Patch Collection account holders earn rewards on every purchase</p>
                    </div>
                </div>
            </div>
            <div className="Apparel">
                <h1>Apparel</h1>
                <div className='rect'>
                    <Rectangle Data={ID1}/>
                    <Rectangle Data={ID2}/>
                    <Rectangle Data={ID3}/>
                    <Rectangle Data={ID4}/>
                </div>
            </div>
            <Footer/>
                
        </div>
    )
}
export default MainSection