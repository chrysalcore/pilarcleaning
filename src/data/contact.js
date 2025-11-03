export const contact = [
    {
        href: 'https://wa.me/17865807657',
        icon: 'whatsapp.svg',
        name: 'Whatsapp',
        text: '+1 (786) 580-7657'
    },
    {
        href: 'mailto:contact@pilarcleaning.com',
        icon: 'email.svg',
        name: 'Email',
        text: 'contact@pilarcleaning.com'
    },
    {
        href: 'tel:17865807657',
        icon: 'phone.svg',
        name: 'Phone',
        text: '+1 (786) 580-7657'
    },
    {
        href: 'https://www.google.com/maps/place/1006+36th+St,+Roanoke,+VA+24017,+EE.+UU./@37.2921492,-79.999811,17z/data=!3m1!4b1!4m5!3m4!1s0x884d0c1b3bbef151:0xbcc193f7110452be!8m2!3d37.292145!4d-79.9972361?entry=ttu&g_ep=EgoyMDI1MTAyOS4yIKXMDSoASAFQAw%3D%3D',
        icon: 'location.svg',
        name: 'Address',
        text: '1006 36th St, Roanoke, VA'
    },
    {
        href: 'https://calendar.google.com/calendar/',
        icon: 'clock.svg',
        name: 'Hours',
        text: 'Tuesday - Saturday, 10am - 7pm'
    }
]

export const inputs = [
    {
        label: 'Name',
        name: 'name',
        type: 'text',
        placeholder: 'John Doe',
        isInput: true
    },
    {
        label: 'Subject',
        name: 'subject',
        type: 'option',
        placeholder: '',
        value: [
            'Residencial Cleaning',
            'Comercial Cleaning'
        ],
        isInput: true
    },
    {
        label: 'Description',
        name: 'description',
        type: 'textarea',
        placeholder: 'I want to...',
        isInput: false,
    }
]
