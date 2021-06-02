import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


function Post({ title, text, user}) {
    const [isOpen, setIsOpen] = useState(false);
    
    const onClickPost = () => {
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
    }
    return (
        <>
        <div className="post-container">
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2" color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography ariant="body2" color="textSecondary" component="p">{text}</Typography>
                </CardContent>
                <CardActions style={{display: "flex", alignItems: "baseline"}}>
                    Author: <Button color="primary" size="small" onClick={onClickPost}>{user.name}</Button>
                </CardActions>
            </Card>
        </div>
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">{user.name}</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText id="alert-dialog-description">
                        {`Address: ${user.address.city}, ${user.address.street}, ${user.address.suite}, ZIP ${user.address.zipcode}`}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        {`Email: ${user.email}`}
                    </DialogContentText><DialogContentText id="alert-dialog-description">
                        {`Phone: ${user.phone}`}
                    </DialogContentText>
                    <DialogContentText id="alert-dialog-description">
                        {`Company: ${user.company.name}`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Post;