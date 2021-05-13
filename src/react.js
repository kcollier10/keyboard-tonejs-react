import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
    constructor(props){
        super(props);
        this.state = { color: green };
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        const newColor = this.state.color == green ? yellow : green;
        this.setState({ color: newColor });
    }

    render() {
        return (
            <div style={{background: this.state.color}}>
                <h1>
                    Change my color
                </h1>
                <button onClick={this.changeColor}>
                    Change color
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';

class Mood extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mood: 'good' };
        this.toggleMood = this.toggleMood.bind(this);
    }

    toggleMood() {
        const newMood = this.state.mood == 'good' ? 'bad' : 'good';
        this.setState({ mood: newMood });
    }

    render() {
        return (
            <div>
                <h1>I'm feeling {this.state.mood}!</h1>
                <button onClick={this.toggleMood}>
                    Click Me
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Mood />, document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: 'Frarthur' };

        this.changeName = this.changeName.bind(this);
    }

    changeName(newName) {
        this.setState({
            name: newName
        });
    }

    render() {
        return <Child name={this.state.name} onChange={this.changeName} />
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: 'Frarthur' };

        this.changeName = this.changeName.bind(this);
    }

    changeName(newName) {
        this.setState({
            name: newName
        });
    }

    render() {
        return <Child name={this.state.name} onChange={this.changeName} />
    }
}

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
    constructor(props) {
        super(props);

        this.state = { name: 'Frarthur' };

        this.changeName = this.changeName.bind(this);
    }

    changeName(newName) {
        this.setState({
            name: newName
        });
    }

    render() {
        return (
            <div>
                <Child onChange={this.changeName} />
                <Sibling name={this.state.name} />
            </div>
        );
    }
});

ReactDOM.render(
    <Parent />,
    document.getElementById('app')
);

import React from 'react';

export class Child extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.value;
        this.props.onChange(name);
    }

    render() {
        return (
            <div>
                <select
                    id="great-names"
                    onChange={this.handleChange}>

                    <option value="Frarthur">Frarthur</option>
                    <option value="Gromulus">Gromulus</option>
                    <option value="Thinkpiece">Thinkpiece</option>
                </select>
            </div>
        );
    }
}

import React from 'react';

export class Sibling extends React.Component {
    render() {
        const name = this.props.name;
        return (
            <div>
                <h1>Hey, my name is {name}!</h1>
                <h2>Don't you think {name} is the prettiest name ever?</h2>
                <h2>Sure am glad that my parents picked {name}!</h2>
            </div>
        );
    }
}

import React from 'react';
import ReactDOM from 'react-dom';
import { Video } from './Video';
import { Menu } from './Menu';

const VIDEOS = {
    fast: 'https://content.codecademy.com/courses/React/react_video-fast.mp4',
    slow: 'https://content.codecademy.com/courses/React/react_video-slow.mp4',
    cute: 'https://content.codecademy.com/courses/React/react_video-cute.mp4',
    eek: 'https://content.codecademy.com/courses/React/react_video-eek.mp4'
};

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { src: VIDEOS.fast };
    }
    chooseVideo(newVideo) {
        this.setState({
            src: VIDEOS[newVideo]
        })
        this.chooseVideo = this.chooseVideo.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Video Player</h1>
                <Menu chooseVideo = {this.chooseVideo}/>
                <Video src={this.state.src}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

import React from 'react';

export class Video extends React.Component {
    render() {
        return (
            <div>
                <video src={this.props.src}controls autostart autoPlay muted />
            </div>
        );
    }
}

import React from 'react';

export class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) = {
    var text = e.target.value;
    this.props.chooseVideo(text);
},
render() {
    return (
        <form onClick={this.handleClick}>
            <input type="radio" name="src" value="fast" /> fast
            <input type="radio" name="src" value="slow" /> slow
            <input type="radio" name="src" value="cute" /> cute
            <input type="radio" name="src" value="eek" /> eek
        </form>
    );
}
}

import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar';

class ProfilePage extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <h1>All About Me!</h1>
                <p>I like movies and blah blah blah blah blah</p>
                <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
            </div>
        );
    }
}

ReactDOM.render(
    <ProfilePage />
document.getElementById('app')
)

import React from 'react';

export class NavBar extends React.Component {
    render() {
        const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
        const navLinks = pages.map(page => {
            return (
                <a href={'/' + page}>
                    {page}
                </a>
            )
        });

        return <nav>{navLinks}</nav>;
    }
}