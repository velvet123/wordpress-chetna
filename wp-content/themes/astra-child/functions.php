
<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
	wp_enqueue_style( 'child-style',
		get_stylesheet_uri(),
		array( 'parenthandle' ),
		wp_get_theme()->get( 'Version' ) // This only works if you have Version defined in the style header.
	);
}












function custom_file_upload_form() {
    ob_start(); // Start output buffering
    ?>
    <form action="<?php echo esc_url(admin_url('admin-post.php')); ?>" method="post" enctype="multipart/form-data">
        <input type="hidden" name="action" value="custom_file_upload">
        <label for="file">Choose File:</label>
        <input type="file" name="file" id="file" />
        <input type="submit" value="Upload" />
    </form>
    <?php
    return ob_get_clean(); // End output buffering and return the content
}
add_shortcode('custom_file_upload_form', 'custom_file_upload_form');

function handle_custom_file_upload() {
    if (isset($_FILES['file'])) {
        $file = $_FILES['file'];

        // Define the upload directory
        $upload_dir = wp_upload_dir();

        // Define the file path
        $file_path = $upload_dir['path'] . '/' . $file['name'];

        // Move the file to the upload directory
        move_uploaded_file($file['tmp_name'], $file_path);

        // Prepare data for database insertion
        $attachment_data = array(
            'post_title'     => sanitize_file_name($file['name']),
            'post_content'   => '',
            'post_status'    => 'inherit',
            'post_mime_type' => $file['type'],
        );

        // Insert the attachment into the database
        $attachment_id = wp_insert_attachment($attachment_data, $file_path);

        // Update attachment metadata
        $attachment_data = wp_generate_attachment_metadata($attachment_id, $file_path);
        wp_update_attachment_metadata($attachment_id, $attachment_data);

        // Optionally, you can save additional data to a custom table or perform other actions

        // Display a success message
        echo '<p>File uploaded successfully!</p>';
    }

    // Redirect back to the form page after the upload
    wp_redirect($_SERVER['HTTP_REFERER']);
    exit;
}
add_action('admin_post_custom_file_upload', 'handle_custom_file_upload');
