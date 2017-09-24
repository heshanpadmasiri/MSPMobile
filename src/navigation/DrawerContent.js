import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('window');

const ARTICLES = (<Icon name="ios-paper" size={35} />);
const GALLERY = (<Icon name="md-images" size={35} />);
const RANKINGS = (<Icon name="md-ribbon" size={35} />);
const ABOUT = (<Icon name="md-finger-print" size={35} />);

const HEADER_BACKGROUND = require('../images/materialBack.jpg');
const TEXT_LOGO = require('../images/textLogo.png');
const LOGO = require('../images/Logo.png');

class DrawerContent extends Component {
    handleNav = (route) => {
        Actions.drawerClose();
        Actions[route].call();
    }


    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar backgroundColor="black" barStyle="light-content" />

                <View style={styles.headerBackground}>
                    <Image source={HEADER_BACKGROUND} style={styles.header}>
                        <Image source={LOGO} resizeMode='center' style={styles.Logo} />
                        <Image source={TEXT_LOGO} resizeMode='contain' style={styles.textLogo} />



                    </Image>
                </View>
                <View style={styles.body}>
                    <DrawerButton icon={ARTICLES} text='Articles' nav={() => { this.handleNav('articles'); }} />
                    <DrawerButton icon={GALLERY} text='Gallery' nav={() => { this.handleNav('gallery'); }} />
                    <View style={styles.ruler} />
                    <Text style={styles.title}>Inter Uni Games 2017</Text>
                    <DrawerButton icon={RANKINGS} text='Rankings' nav={() => { this.handleNav('rankings'); }} />
                    <View style={styles.ruler} />
                    <DrawerButton icon={ABOUT} text='About' nav={() => { this.handleNav('about'); }} />
                </View>
                <View style={styles.footer}><Text style={styles.footerText}>www.moraspirit.com</Text><Text>2017</Text></View>
            </ScrollView>
        );
    }
}

const DrawerButton = (props) => (
    <TouchableOpacity style={styles.button} onPress={props.nav}>
        <View>{props.icon}</View><Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {

        margin: 0,
        padding: 0
    },
    header: {
        height: 200,

        justifyContent: 'flex-end'
    },
    headerBackground: {
        backgroundColor: '#1f78b7'
    },
    Logo: {
        marginLeft: 100,
        width: 110,
        height: 70
    },
    textLogo: {
        marginLeft: 75,
        marginBottom: 3,
        width: 200
    },
    body: {
        height: height - 260,
        paddingLeft: 15
    },
    button: {

        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 20
    },
    text: {
        color: 'black',
        marginLeft: 15
    },
    ruler: {
        borderBottomColor: '#dbd9d2',
        borderBottomWidth: 1,
        marginTop: 15,
        marginLeft: -15
    },
    title: {
        marginTop: 10,
        marginLeft: 10,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#93918c'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginRight:20
    },
    footerText: {

        marginLeft: 30,

    }

});

export default DrawerContent;