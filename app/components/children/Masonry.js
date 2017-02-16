// imports React
var React = require("react");

//Importing React-masonry
var Masonry = require("react-masonry-component");

var masonryOptions = {
    transitionDuration: 0
};

var Gallery = React.createClass ({
  render: function () {
    var childElements = this.props.elements.map(function(element){
      return (
        <li className="image-element-class">
          <img src={element.src} />
        </li>
      );

    });

      return (
          <Masonry
              className={'my-gallery-class'} // default ''
              elementType={'ul'} // default 'div'
              options={masonryOptions} // default {}
              disableImagesLoaded={false} // default false
              updatedOnEachImageLoaded={false} // default false and works only if disableImagesLoaded is false
          >
              {childElements}
          </Masonry>
      );

  }
});

module.exports = Gallary;
