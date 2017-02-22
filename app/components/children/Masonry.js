// imports React
var React = require("react");

//Importing React-masonry
var Masonry = require("react-masonry-component");
var MarketplaceCard = require("./MarketplaceCard");

var masonryOptions = {
    transitionDuration: 500
};

var Gallery = React.createClass ({
  render: function () {
    var childElements = this.props.elements.map(function(element){
      return (

          <MarketplaceCard title={element.brand + " " + element.model} image={element.cardImageURL} price={element.sellingPrice} comments={element.comments}/>

      );

    });

      return (
          <Masonry
              className={'my-gallery-class'}
              elementType={'div'}
              options={masonryOptions}
              disableImagesLoaded={false}
              updatedOnEachImageLoaded={false}
          >
              {childElements}
          </Masonry>
      );

  }
});

module.exports = Gallery;
