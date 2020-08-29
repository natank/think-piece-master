import React, { Component } from 'react';
import firebase from '../firebase';
import { firestore, auth } from '../firebase';

import Posts from './Posts';
import { collectIdsAndDocs } from '../utilities';
import Authentication from './Authentication';
window.firebase = firebase;
class Application extends Component {
  state = {
    posts: [],
    user: null
  };

  unsubscribeFroFirestore = null;
  unsubscribeFromAuth = null;

  componentDidMount = async () => {
    // firestore.collection():
    // 1. Subscribe to changes in the firestore collection
    // 2. Returns a function that can be called to unsubscribe
    this.unsubscribeFromFirestore = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs)
      this.setState({ posts })
    })
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => this.setState({ user }))
  }

  componentWillUnmout = () => {
    this.unsubscribe();
  }

  render() {
    const { posts, user } = this.state;

    return (
      <main className="Application">
        <h1>Think Piece</h1>
        <Authentication user={user} />
        <Posts posts={posts} />
      </main>
    );
  }
}

export default Application;
