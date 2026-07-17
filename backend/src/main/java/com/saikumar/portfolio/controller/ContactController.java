package com.saikumar.portfolio.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.saikumar.portfolio.dto.ContactRequest;
import com.saikumar.portfolio.model.ContactMessage;
import com.saikumar.portfolio.repository.ContactMessageRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final ContactMessageRepository contactMessageRepository;
    private final JavaMailSender mailSender;

    @Autowired
    public ContactController(ContactMessageRepository contactMessageRepository,
                              JavaMailSender mailSender) {
        this.contactMessageRepository = contactMessageRepository;
        this.mailSender = mailSender;
    }

    @PostMapping
    public ResponseEntity<?> submitContactForm(@Valid @RequestBody ContactRequest request, BindingResult bindingResult) {
    	
    	
    	  if (bindingResult.hasErrors()) {
    	        String errorMsg = bindingResult.getFieldErrors().stream()
    	                .map(e -> e.getField() + ": " + e.getDefaultMessage())
    	                .collect(java.util.stream.Collectors.joining(", "));
    	        return ResponseEntity.badRequest().body(Map.of("message", errorMsg));
    	    }
        ContactMessage message = new ContactMessage(
                request.getName(), request.getEmail(), request.getMessage());
        contactMessageRepository.save(message);

        // Best-effort email notification; do not fail the request if mail isn't configured.
        try {
            SimpleMailMessage mail = new SimpleMailMessage();
            mail.setTo("saikumaramirishetti98976@gmail.com");
            mail.setSubject("New Portfolio Contact: " + request.getName());
            mail.setText("From: " + request.getName() + " (" + request.getEmail() + ")\n\n"
                    + request.getMessage());
            mailSender.send(mail);
        } catch (Exception ignored) {
            // Mail server not configured yet — message is still saved in DB.
        }

        return ResponseEntity.ok(Map.of(
                "status", "success",
                "message", "Thanks for reaching out, I'll get back to you soon."
        ));
    }
}
