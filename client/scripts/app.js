// Your ReactJS code here
var Player = React.createClass({
	render: function() {
		return (<div>
			<audio className='player' autoPlay controls></audio>
			</div>)
	}
});

var songQueue = [];

var SearchExample = React.createClass({
  getInitialState: function(){
    return { searchString: '',
      data: []
    };
  },

  get: function(query, thisArg) {
    SC.get('/tracks', {
      q: query,
      limit: 10
    }).then(function(tracks) {
      console.log('hi')
      console.log('hi alice. you suck!', tracks);
      console.log(query)
      thisArg.setState({data: tracks});
      console.log('data: ', thisArg.state.data);
    });
  },

  handleSubmit: function(e){
    // If you comment out this line, the text box will not change its value.
    // This is because in React, an input cannot change independently of the value
    // that was assigned to it. In our case this is this.state.searchString.
    e.preventDefault();
    var search = this.refs.searchinstuff.getDOMNode().value
    this.get(search, this);
  },

  pushQueue: function(item) {
    songQueue.push(item);
    console.log(songQueue);
  },

  render: function() {

    var libraries = this.state.data,
      searchString = this.state.searchString.trim().toLowerCase();

      console.log(this.state.data)

      if(searchString.length > 0){

      // We are searching. Filter the results.

      // libraries = libraries.filter(function(l){
      //     return l.name.toLowerCase().match( searchString );
      // });

      }

  return <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Search, son!" ref="searchinstuff"/>
            <input type='submit'  />
          </form>
            <ul>

              { libraries.map(function(l){
                  return <li onClick={this.pushQueue}>{l.title} <a href={l.url}>{l.url}</a></li>
              }) }
            </ul>

          </div>;

    }
});




// Render the SearchExample component on the page

React.render(
    <SearchExample  />,
    document.body
);


/*
var Input = React.createClass({
  render: function() {
    return (<div>
      <input type='search' placeholder='Search, son!'>
      </div>)
  }
});

var Results = React.createClass({
  render: function() {
    return (<h3>Results</h3>
      <div>
        <
      </div>)
  }
});

var SCget = React.createClass({

});

React.render(<Player/>, document.body);
*/
