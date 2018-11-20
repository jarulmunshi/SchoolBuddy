import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Alert,
    Image,
    SafeAreaView
} from 'react-native'
import FAB from 'react-native-fab'

import {WindowsHeight,} from '../commonComponent/global';
import {Header, Footer, ClassNotesInfo, AddNote,} from '../commonComponent/Common'

export default class Message extends Component{
    state = {
        isBack:true,
        iName:"bars",
        title: '',
        description: '',
        messageList: [
            {
                'id': 1,
                'title':'Last date of Exam form 23 nov 2018',
                'description':'Loream Ipsum is simply dummy text of the printing and testing industry. Loream Ipsum is simply dummy text of the printing and testing industry.',
                'createdDate':'12 Nov 2018',
                'color':'red'
            },
            {
                'id': 2,
                'title':'Last date of Exam form 23 nov 2018',
                'description':'Loream Ipsum is simply dummy text of the printing and testing industry. Loream Ipsum is simply dummy text of the printing and testing industry.',
                'createdDate':'12 Nov 2018',
                'color':'blue'
            },
            {
                'id': 3,
                'title':'Last date of Exam form 23 nov 2018',
                'description':'Loream Ipsum is simply dummy text of the printing and testing industry. Loream Ipsum is simply dummy text of the printing and testing industry.',
                'createdDate':'12 Nov 2018',
                'color':'green'
            }
        ],
        showAddMessage: false,
    }

    hideAddMessage(){
        this.setState({
            showAddMessage: false
        })
    }

    addMessage(title, description){
        let newState = Object.assign({}, this.state);
        let newMessage = {
            'id': 8,
            'title': title,
            'description': description,
            'createdDate': '12 NOV 2018',
            'color': 'rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')'
        }
        newState.messageList.push(newMessage)
        this.setState(newState);
        this.setState({showAddMessage: false})
    }

    changeTitle(value){
        this.setState({
            title: value
        })
    }

    changeDescription(value){
        this.setState({
            description: value
        })
    }

    renderMessages(){
        return this.state.messageList.map(notes =>
            <ClassNotesInfo key={notes.id} notesInfo={notes}/>
        )
    }

    goBack=()=>{
        this.props.navigation.openDrawer();
    };

    render(){
        return(
            <SafeAreaView style={styles.parentContainer}>
                <Header
                    headerText={"Message"}
                    iName={this.state.iName}
                    isBack={this.state.isBack}
                    onBackButtonPress={this.goBack}
                />

                <View style={{marginTop: 5, height: WindowsHeight - (WindowsHeight * 0.222)}}>
                    <View style={{flex: 1}}>
                        <ScrollView>
                            {this.renderMessages()}
                        </ScrollView>
                        <FAB buttonColor="rgb(2,110,115)" onClickAction={() => this.setState({showAddMessage: true})}/>
                    </View>
                </View>

                {
                    (this.state.showAddMessage) &&
                    <AddNote
                        toggle={() => this.hideAddMessage()}
                        newNote={(title,description) => this.addMessage(title, description)}
                        title={(value) => this.changeTitle(value)}
                        titleValue={this.state.title}
                        description={(value) => this.changeDescription(value)}
                        descriptionValue={this.state.description}
                        heading={'Send Message'}
                    />
                }

                <Footer/>
            </SafeAreaView>
        )
    }
}

const styles = {
    parentContainer: {
        flex: 1,
    },
}