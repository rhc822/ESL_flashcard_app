import React, { Component } from 'react'
import AppData from '../../modules/AppData'
import FlashcardList from '../flashcard/FlashcardList'


class MainView extends Component {

/* <AnimalCard
              key={animal.id}
              animal={animal}
              deleteAnimal={this.deleteAnimal}
              {...this.props}
            /> */


                /* <div>
                    <FlashcardList />
                </div> */

    state = {
        category: [],
      }

      componentDidMount() {
        AppData.getAllCategory()
          .then((AppDataCategoryArray) => {
            this.setState({
              category: AppDataCategoryArray
            })
          })
      }


  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <div className="container-category">
          {this.state.category.map(eachCategory =>
            <section>
                <h1>{eachCategory.name}</h1>

            </section>
            )}
        </div>
      </React.Fragment>
    )
  }
}

export default MainView