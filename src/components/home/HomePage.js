import React from 'react';
import uuid4 from 'uuid';
import Article from "../common/article/Article";

import './HomePage.css';
import {AppearAnimation} from "../common/animation/AppearAnimation";

function renderArticle({title, text}) {
  return (
    <AppearAnimation key={uuid4()} transitionName="Rotate">
      <Article title={title} text={text}/>
    </AppearAnimation>
  );
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    const articles = [
      {title: 'Find', text:'Find what event you want. Fill free to do it every time. Also we will help you in any cases. Find what event you want. Fill free to do it every time. Also we will help you in any cases. '},
      {title: 'Listen', text: 'Realise what you listening. Make right conclusion and never give up until you rich your goal. Realise what you listening. Make right conclusion and never give up until you rich your goal.'},
      {title: 'Enjoy', text:'Enjoy every seconds when you listening song of your favorite artist and don\'t forget to pay use for it.'}
    ]
    this.setState({
      articles: articles
    });
  }

  render() {
    const {articles} = this.state;
    return (
      <section className="home">
       <AppearAnimation>
         <h2 className="home--title">Welcome to OldRadio</h2>
       </AppearAnimation>
        <section className="home--articles">
          {articles.map(renderArticle)}
        </section>
      </section>
    );
  }
}


export default HomePage;
