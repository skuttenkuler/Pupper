# Pupper

A React application to find and match with the best good boys and girls.

![Alt text](./src/assets/images/pupper.gif?raw=true "Preview")


## Technologies Used

* [React](https://reactjs.org/)
* [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
* [Axios](https://github.com/axios/axios)

## Code Snippets

Methods to handle generate new dog after "swipe", randomize chance to match with liked dog and track number of matches .

```JSX
    
     state = {
        image: "",
        match: false,
        matchCount: 0
    };

    componentDidMount() {
        this.nextDog();
    }

    handleClick = event => {
        //get the data-value 
        const btnType = event.target.attributes.getNamedItem("data-value").value;

        const newState = {...this.state };

        if (btnType === "pick") {
            //have 1 in 5 chance to match
            newState.match = 1 === Math.floor(Math.random() * 5) + 1;

            // set newState
            newState.matchCount = newState.match
            ? newState.matchCount + 1
            : newState.matchCount;
        } else {
            //if not liked
            newState.match = false;
        }
        //replace state with newState then NextDog
        this.setState(newState);
        this.nextDog();
    };

    nextDog = () => {
        API.getRandom()
        .then(res => 
            this.setState({
                image: res.data.message
            })
        )
        .catch(err => console.log(err));
    };
  ```

Pupper dog card for Discover Page

  ```JSX
   <div
      className="card"
      style={{
        backgroundImage: props.image ? `url(${props.image})` : "none"
      }}
    >
      {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBtn
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleClick}
        data-value="pass"
      />
      <CardBtn
        style={{ opacity: props.image ? 1 : 0 }}
        onClick={props.handleClick}
        data-value="pick"
      />
    </div>
  );
}

  ```

# Author
  * Sam Kuttenkuler
    - [Github](https://www.github.com/skuttenkuler)
    - [LinkedIn](https://www.linkedin.com/in/skdev91)

# API

[Dog API](https://dog.ceo/dog-api/)