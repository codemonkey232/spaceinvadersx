package nz.ac.auckland.spaceinvadersx.game;

import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

import java.net.*;
import java.util.*;
import java.io.*;

public class Network {

	public static final String IP_ADDRESS = "234.56.78.90";
	public static final int PORT = 4321;

	public static final int MAX_LENGTH = 64;

	static InetAddress group;
	static MulticastSocket socket;

	static boolean connected = false;
	static boolean shutdownHooked = false;

	static int received = -1;

	public static int getReceived() {
		int x = received;
		received = -1;
		return x;
	}

	public static void connect() {
		if (connected) return;
		try {
			group = InetAddress.getByName(IP_ADDRESS);
			socket = new MulticastSocket(PORT);
			socket.joinGroup(group);
			new Thread() { public void run() { while (true) {received = receive();} } }.start();
			connected = true;
			if (!shutdownHooked) {
				Runtime.getRuntime().addShutdownHook( new Thread() { public void run() { disconnect(); } } );
				shutdownHooked = true;
			}
		} catch (Exception e) {
			crash(e);
		}
	}

	private static void disconnect() {
		if (!connected) return;
		connected = false;
		try {
			socket.leaveGroup(group);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static void send(String message) {
		if (message.length() == 0 || message.length() > MAX_LENGTH) return;
		try {
			DatagramPacket packet = new DatagramPacket(message.getBytes(), message.length(), group, PORT);
			socket.send(packet);
		} catch (Exception e) {
			crash(e);
		}
	}

	public static int receive() {
		byte[] buffer = new byte[MAX_LENGTH];
		DatagramPacket packet = new DatagramPacket(buffer, MAX_LENGTH);
		try {
			socket.receive(packet);
		} catch (Exception e) {
			crash(e);
		}
		return Integer.parseInt(new String(buffer, 0, packet.getLength()));
	}

	public static void crash(Exception e) {
		e.printStackTrace();
		System.exit(1);
	}

	public static void main(String[] args) {
		new Spawner();
	}

	static class Spawner implements ActionListener {

		JButton[] buttons;

		public Spawner() {
			Network.connect();
			JFrame frame = new JFrame();
			frame.setBounds(50, 50, 300, 200);
			frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
			JPanel panel = new JPanel();
			frame.getContentPane().add(panel);
			buttons = new JButton[12];
			buttons[0] = new JButton("Daggers - left");
			buttons[1] = new JButton("Daggers - right");
			buttons[2] = new JButton("Crab");
			buttons[3] = new JButton("Hawk");
			buttons[4] = new JButton("Wasp");
			buttons[5] = new JButton("Phantom");
			buttons[6] = new JButton("Beast");
			buttons[7] = new JButton("Life");
			buttons[8] = new JButton("Nuke");
			buttons[9] = new JButton("Shield");
			buttons[10] = new JButton("Rapid");
			buttons[11] = new JButton("Next Level");
			for (int i = 0; i < 12; i++) {
				panel.add(buttons[i]);
				buttons[i].addActionListener(this);
			}
			frame.setVisible(true);
		}

		public void actionPerformed(ActionEvent e) {
			for (int i = 0; i < 12; i++) {
				if (e.getSource() == buttons[i]) {
					Network.send(Integer.toString(i));
					return;
				}
			}

		}

	}


}