import React, { Component } from 'react'
import AppData from '../../modules/AppData'
import FlashcardList from '../flashcard/FlashcardList'

/* The main view of the app where users are able to view their cards, bulk delete cards, create cards, reach the category manager */

class MainView extends Component {



    state = {
        category: [],
      }

      componentDidMount() {
        AppData.getAllCategory(localStorage.getItem("userId"))
          .then((AppDataCategoryArray) => {
            this.setState({
              category: AppDataCategoryArray
            })
          })
      }

/* This section maps through each category and builds flashcards (based on the flashcardList call) for each category.

I needed to put the key as an attribute in the section tag because that is only rendering per category section (if inside the section it would render for each word in the section).  */

  render() {
    return (
      <React.Fragment>
        <div className="w3-container w3-center">
          {this.state.category.map(eachCategory =>
            <>
              <section key={eachCategory.id}>
                  <h3>{eachCategory.name}</h3>
                  <hr/>
                  <div className="w3-center">
                      <FlashcardList
                          categoryId={eachCategory.id}
                          {...this.props}
                      />
                  </div>
              </section>
            </>
            )}
        </div>
      </React.Fragment>
    )
  }
}

export default MainView