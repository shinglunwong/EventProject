import * as React from 'react'
import {
    View,
    Text,
    FlatList,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native'

// const AttendeesList = [{
//     username: 'Lucas',
//     usericon: 'https://dummyimage.com/600x400/000000/fff.png&text=L',
// }, {
//     username: 'Brad',
//     usericon: 'https://dummyimage.com/600x400/000000/fff.png&text=B',
// }, {
//     username: 'Jacob',
//     usericon: 'https://dummyimage.com/600x400/000000/fff.png&text=J'
// }, {
//     username: 'Stephen',
//     usericon: 'https://dummyimage.com/600x400/000000/fff.png&text=S'
// }]
import { Ievent } from '../../models/events';
import { Iuser } from '../../models/users';

interface IAttendeesProps {
    event: Ievent,
  }

export default class Attendees extends React.Component<IAttendeesProps, {}> {
    render() {
        return (
            <View>
                <FlatList
                    data={this.props.event.attendees}
                    renderItem={(data) => {
                        return (
                            <ScrollView>
                                <TouchableOpacity style={{ borderBottomWidth: 0.5, backgroundColor: 'white'}}>
                                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', margin: 10, marginHorizontal: 30 }}>

                                            <Image
                                                style={{ borderRadius: 75, width: 70, height: 70, }}
                                                source={{ uri: data.item.photo }}
                                            />

                                            <Text style={{ marginHorizontal: 20, padding: 10, fontSize: 20, textAlign: 'center' }}>
                                                {data.item.name}
                                            </Text>
                                       
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        )
                    }
                    }
                />
                < Text >

                </Text >
            </View >
        )
    }
}
