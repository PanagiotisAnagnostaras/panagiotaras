import '../page.css'
let Networks = () => {
    return (<div>
        <h2>Networks School</h2>
        <h3>IP</h3>
        <p>
            An IP (Internet Protocol) address is a unique numerical identifier assigned to each device connected to a computer network that uses the Internet Protocol for communication. It allows devices like computers, smartphones, and servers to locate and communicate with each other over a network, such as the internet.
        </p>
        <br/>
        <p>
            IPv4: The most common format, using 32 bits, typically shown as four decimal numbers separated by periods (e.g., 192.168.1.1). It provides around 4.3 billion unique addresses.<br />
            IPv6: A newer version designed to solve the shortage of IPv4 addresses, using 128 bits, represented as eight groups of hexadecimal numbers separated by colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).
        </p>
        <p>
            Public IP: A globally unique address used for communication over the internet. <br />
            Private IP: Used within private networks (e.g., your home or office network) and not routable on the public internet.
        </p>
        <p>
            Static IP: An address that doesn’t change over time, typically assigned manually for devices like servers. <br />
            Dynamic IP: Assigned automatically by a DHCP server, and may change periodically.
        </p>
        <h3>TCP</h3>
        <p>
            Transmission Control Protocol (TCP) is a communications standard that enables application programs and computing devices to exchange messages over a network. It is designed to send packets across the internet and ensure the successful delivery of data and messages over networks.
        </p>
        <h3>Port</h3>
        <p>A port is a virtual point where network connections start and end. Ports are software-based and managed by a computer's operating system.
            Each port is associated with a specific process or service. Ports allow computers to easily differentiate between different kinds of traffic: emails go to a different port than webpages,
            for instance, even though both reach a computer over the same Internet connection.</p>
        <h3>Socket</h3>
        <p>A socket is one endpoint of a two-way communication link between two programs running on the network.
            A socket is bound to a port number so that the TCP layer can identify the application that data is destined to be sent to.</p>
        <h3>Endpoint</h3>
        <p>An endpoint is a combination of an IP address and a port number. Every TCP connection can be uniquely identified by its two endpoints. That way you can have multiple connections between your host and the server.</p>
        <h3>curl & wget</h3>
        <p>todo</p>
    </div>)
}

export default Networks;