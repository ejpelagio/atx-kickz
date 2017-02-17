//
import React from 'react';
import KicksCard from './children/KicksCard'
import helpers from '../utils/helpers'
import KicksCard from './children/KicksCard'



var NewReleases = React.createClass({
    getInitialState: function() {
        return { newReleases: [], nrData: ""};
    },
})






export default class NewReleases extends React.Component {
    render(){
       {
    	const nikeAirJordan1 = {
    	  releaseDate: "2/1/2017",
    	  brand: "Nike",
    	  year: "2017",
		  model: "Air Jordan 1 Retro High OG",
    	  color: "Black",
    	  size: "13",
    	  description: "The Air Jordan 1 Retro High OG Men's Shoe is updated with signature hoops detail while maintaining the same plush feel and lightweight fit that made the original famous.",
    	  img: "http://images.nike.com/is/image/DotCom/PDP_COPY/555088_011/air-jordan-1-retro-high-og-mens-shoe.jpg"

		};
    	
    	const vansJCrew = {
    	  releaseDate: "2/1/2017",
    	  brand: "Vans/J.Crew",
    	  year: "2017",
    	  model: "Washed Canvas Sneakers",
    	  color: "nickel",
    	  size: "10",
		  description: "Founded by Paul Van Doren in 1966, Vans has defined the footwear street culture of Southern California for decades. In this exclusive collaboration, we partnered with the company to recreate its famous lace-up sneakers to our exact specifications. Designed with custom colors, they're washed for a vintage look and accented with hiking-boot laces for one-of-a-kind shoes that are only available at J.Crew.",
    	  img: "http://totakethetrain.files.wordpress.com/2013/06/photo.jpg"

		}; 
    	
    	const reebokLifestyle = {
    	  releaseDate: "2/1/2017",
    	  brand: "Reebok",
    	  year: "2017",
    	  model: "Lifestyle Classic Nylon W",
    	  color: "White",
    	  size: "11",
    	  description: "These sneakers are light weight and extremely comfortable.",
    	  img: "http://www.zappos.com/images/z/2/7/3/27300-p-2x.jpg"



    	};
    	
    	const onitsujaTokuten = {
    	  releaseDate: "2/1/2017",
    	  brand: "Onitsuja",
    	  year: "2017",
    	  model: "Tokuten",
    	  color: "Grey",
    	  size: "9",
    	  description: "The Tokuten™ model is the ultimate heritage soccer shoe enhanced with low-profile performance features and style benefits. Its original fabrication was infused with innovative technology to offer a fundamental performance fit. Assembled into the classic silhouette is a rubber gum outsole and cupsole construction, while the majority of the upper is fabricated with suede overlaid with leather tiger stripes.",
    	  img: "http://a3.zassets.com/images/z/2/7/2/2/1/2/2722128-p-MULTIVIEW.jpg"

		}; 
    	
    	const adidasSamba = {
    	  releaseDate: "2/1/2017",
    	  brand: "Adidas",
    	  year: "2017",
    	  model: "Samba",
    	  color: "Black and White",
    	  size: "9",
    	  description: "A shoe that's synonymous with adidas, the Samba was created in 1950 for soccer training on frozen outdoor pitches. This men's sneaker version of the legendary shoe has a look that's true to the Samba of yesteryear, with an all-leather upper, serrated 3-Stripes and heritage colors.",
    	  img: "http://www.zappos.com/images/z/3/1/8/31863-3-4x.jpg"

		}; 
	
	   
	return (
        	<div className="container">
				

				<h1>New Releases</h1>





				<div className="row">
					  
				   <div className="col">
				      
				      <KicksCard model = {nikeAirJordan1.model} description = {nikeAirJordan1.description} img= {nikeAirJordan1.img} date = {nikeAirJordan1.releaseDate}  />
	        		
	        		</div>
        	 	  
        	 	    <div className="col">
        	 		 
        	 		  <KicksCard model = {vansJCrew.model} description = {vansJCrew.description} img= {vansJCrew.img}  date = {vansJCrew.releaseDate}  />
        		    
        		    </div>
        		
        		</div>


        		<div className ="row">
        		  
        		  <div className="col">
        			<KicksCard model = {reebokLifestyle.model} description = {reebokLifestyle.description} img= {reebokLifestyle.img}  date = {reebokLifestyle.releaseDate}  />
        		  </div>
        	 		
        		  <div className="col">
        	 		<KicksCard model = {onitsujaTokuten.model} description = {onitsujaTokuten.description} img= {onitsujaTokuten.img}  date = {onitsujaTokuten.releaseDate}  />
        	 	  </div>
				
				</div>

				

			</div>

        );
    }
}
