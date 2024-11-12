import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boats = ({ name, description, icon_name, poster }) => {
    return (
        <View style={styles.boatContainer}>
            <View style={styles.header}>
                <Icon name={icon_name} size={24} color="#4a90e2" style={styles.icon}  />
                <Text style={styles.name}>{name}</Text>
                <Icon name={icon_name} size={24} color="#4a90e2" style={styles.icon}  />
            </View>
            <Text style={styles.description}>
                {description}
            </Text>
            <Image source={poster} style={styles.poster} />
        </View>
    );
};

const AllBoats = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                GetABoat - For Sale
            </Text>
            <Boats
                name="SEA RAY 500 SUNDANCER"
                icon_name="sailboat"
                description="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."
                poster={require('../img/sea_ray.jpg')}
            />
            <Boats
                name="FOUR WINNS HORIZON 180"
                icon_name="sailboat"
                description="A sporty look and refined details truly set the Horizon 180 above all others."
                poster={require('../img/four_winns.jpg')}
            />
            <Boats
                name="FLIPPER 640 ST"
                icon_name="sailboat"
                description="A modern take on the classic, traditional hardtop and perfect for a family picnic."
                poster={require('../img/flipper.jpg')}
            />
            <Boats
                name="PRINCESS V48"
                icon_name="sailboat"
                description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."
                poster={require('../img/princess.jpg')}
            />
            <Boats
                name="BAYLINER 175 BOWRIDER"
                icon_name="sailboat"
                description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."
                poster={require('../img/bayliner.jpg')}
            /><Boats
            name="FAIRLINE TARGA 47"
            icon_name="sailboat"
            description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."
            poster={require('../img/fairline.jpg')}
        />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#2C3E50',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 45,
        textAlign: 'center',
        paddingVertical: 10,
        backgroundColor: 'grey',
        color: 'white',
        borderRadius: 8,
        borderColor: 'white',
        borderWidth: 1.5,

    },
    boatContainer: {
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: 10,
        marginBottom: 20,
        borderColor: 'white',
        borderWidth: 1.5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginBottom: 10,
    },
    icon: {
        marginRight: 8,
        marginLeft: 8,
        color: 'beige',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    description: {
        fontSize: 14,
        color: 'white',
        paddingVertical: 6,
        paddingHorizontal: 8,
        backgroundColor: '#2C3E50',
        borderRadius: 4,
        borderColor: 'white',
        textAlign: 'center',
        marginBottom: 10,
        borderWidth: 1,
    },
    poster: {
        width: '100%',
        height: 200,
        borderRadius: 4,
        borderColor: '#b0b0b0',
        borderWidth: 1,
    },
});

export default AllBoats;
