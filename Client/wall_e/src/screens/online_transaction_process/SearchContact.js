import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import { Search, TextIcon } from 'lucide-react-native';
import React, { useEffect, useState } from 'react'

const SearchContact = (props) => {

    const [search, setSearch] = useState("");
    const [contacts, setContacts] = useState(props.route.params.contacts)
    const [initialContacts, setInititialContacts] = useState(props.route.params.contacts)

    // useEffect(()=>{
    //     console.log(props.route.params);
    // },[])

    useEffect(() => {

        if (search) {
            const filteredContacts = contacts.filter((contact) => {
                if (contact.phoneNumber.includes(search) || contact.name.includes(search)) {
                    return contact;
                }
            })
            setContacts(filteredContacts)
        }

    }, [search])

    function handleKeyPress(e) {
        if (e.nativeEvent.key === 'Backspace') {
            setContacts(initialContacts)
        }
    }

    function renderItem({ item }) {
        return (
            <TouchableHighlight
            underlayColor="#D9D9D9" // Define the highlight color on press
            onPress={() => console.log(`Contact Pressed: ${item.name}`)} // Handle item press
            activeOpacity={0.6} // Optionally adjust opacity when pressed
            >
                <View
                    style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, marginTop: 8, borderBottomColor: 'grey', borderBottomWidth: 0.5, paddingVertical: 10 }}
                >

                    <Image source={{ uri: item.profilePhoto }} style={styles.profileImage} />

                    <Text style={{ fontSize: 17, color: 'grey', fontWeight: '700', flex: 1, marginLeft: '5%' }} >{item.name}</Text>
                    <Text style={{ fontSize: 17, color: 'grey' }}>{item.phoneNumber}</Text>

                </View>
            </TouchableHighlight>
        )
    }

    return (
        <View style={{ flex: 1 }} >
            <Text style={{ textAlign: 'center', fontSize: 18, marginVertical: 10 }} >Quick Transfer</Text>

            <View
                style={[styles.inputWrapper, {
                    borderColor: search ? 'black' : '#D7D7D7'
                }]}
            >
                <Search color={search ? 'black' : '#D7D7D7'} size={22} strokeWidth={2.5} />

                <TextInput
                    placeholder='Search account / bank account'
                    placeholderTextColor={'#D7D7D7'}
                    style={styles.input}
                    onChangeText={setSearch}
                    value={search}
                    onKeyPress={(e) => handleKeyPress(e)}
                />

            </View>

            <FlatList
                data={contacts}
                ListEmptyComponent={() => <Text>No Contacts</Text>}
                renderItem={renderItem}
                keyExtractor={(contact) => contact.id}
            />

        </View>
    )
}

export default SearchContact

const styles = StyleSheet.create({
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 18,
        height: 50,
        borderColor: '#D7D7D7',
        borderWidth: 2,
        marginHorizontal: 18,
        borderRadius: 12
    },
    input: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,

    },
    profileImage: {
        height: 40,
        width: 40,
        resizeMode: 'cover',
        borderRadius: 20
    }
})