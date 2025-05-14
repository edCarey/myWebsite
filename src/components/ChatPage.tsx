import SendIcon from "@mui/icons-material/Send";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import config from "../config";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const chatContainer = messagesEndRef.current.parentElement;
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(`${config.apiBaseUrl}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
        }),
      });

      const data = await response.json();

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper
        elevation={3}
        sx={{ height: "80vh", display: "flex", flexDirection: "column" }}
      >
        <Box sx={{ p: 2, backgroundColor: "primary.main", color: "white" }}>
          <Typography variant="h6">Chat with Ed</Typography>
        </Box>

        <Box
          sx={{
            flex: 1,
            overflow: "auto",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {messages.map((message, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent:
                  message.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  maxWidth: "70%",
                  backgroundColor:
                    message.role === "user" ? "primary.light" : "grey.100",
                  color: message.role === "user" ? "white" : "text.primary",
                  "& p": {
                    m: 0,
                    mb: 1,
                    "&:last-child": {
                      mb: 0,
                    },
                  },
                  "& ul, & ol": {
                    m: 0,
                    mb: 1,
                    pl: 2,
                  },
                }}
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    p: ({ children }) => (
                      <Typography variant="body1">{children}</Typography>
                    ),
                    a: ({ href, children }) => (
                      <Typography
                        component="a"
                        href={href}
                        variant="body1"
                        sx={{
                          color:
                            message.role === "user"
                              ? "inherit"
                              : "primary.main",
                          textDecoration: "underline",
                        }}
                      >
                        {children}
                      </Typography>
                    ),
                  }}
                >
                  {message.content}
                </ReactMarkdown>
              </Paper>
            </Box>
          ))}
          <div ref={messagesEndRef} />
        </Box>

        <Box
          sx={{
            p: 2,
            backgroundColor: "background.paper",
            borderTop: 1,
            borderColor: "divider",
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            <TextField
              fullWidth
              multiline
              maxRows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              disabled={isLoading}
              sx={{ backgroundColor: "white" }}
            />
            <Button
              variant="contained"
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              sx={{ minWidth: "100px" }}
            >
              {isLoading ? <CircularProgress size={24} /> : <SendIcon />}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};
