// IMPORTING MODULES
import React, { Component, Fragment } from "react";

// IMPORTING COMPONENTS
import HeaderMain from "../../stateless/Headers/Main/Main";
import CardPost from "../../stateless/Cards/Post/Post";

// IMPORTING STYLES
import "./App.scss";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        personName: "THIAGO DE BONIS",
        personAvatar: "./img/avatar1.png",
        postDate: "há 3 minutos",
        postText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquam finibus orci. Quisque aliquet venenatis felis, sit amet laoreet libero lobortis sit amet. Duis imperdiet sem ac turpis faucibus porttitor. Nullam sed orci tincidunt, eleifend ex sit amet, facilisis nunc. Etiam mollis pellentesque ex et condimentum. Vivamus mollis leo eu mi malesuada pretium. Maecenas faucibus rhoncus ex posuere sodales. Suspendisse gravida eget justo sit amet lobortis. Nunc nisi est, maximus a tristique vel, maximus a elit. Phasellus tincidunt est id ipsum maximus luctus euismod sed dui. Nulla quis commodo quam. Suspendisse non lectus ac massa pulvinar sagittis vel at augue."
      },
      {
        id: 2,
        personName: "DIEGO FERNANDES",
        personAvatar: "./img/avatar2.jpg",
        postDate: "há 30 minutos",
        postText:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eros libero, egestas et lectus sit amet, luctus imperdiet risus. Duis cursus ante at leo pharetra, dapibus placerat sem gravida. Phasellus turpis orci, iaculis et diam et, efficitur placerat ante. Suspendisse blandit ac mauris nec tempus. Aliquam consequat leo ut purus."
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="App">
        <Fragment>
          <HeaderMain>RocketBook</HeaderMain>
          <div className="container-posts">
            {posts &&
              posts.map(_post => <CardPost key={_post.id} data={_post} />)}
          </div>
        </Fragment>
      </div>
    );
  }
}
